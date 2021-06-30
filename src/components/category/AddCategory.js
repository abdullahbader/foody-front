import { useState } from "react"
import { useDispatch } from "react-redux"
import { addCategory } from "../../store/actions/categoryActions"
const AddCategory=()=>{
const[category,setCategory] = useState({

    name:"",

})
const dispatch=useDispatch()

    const handleChange=(event)=>{
        setCategory({...category,[event.target.name]: event.target.value})


    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        dispatch(addCategory(category))

    }


    return(

        <form onSubmit={handleSubmit}>

            <input type="text" name="name" onChange={handleChange} value={category.name} />
            <button type="submit">ADD</button>
        </form>

    )
}


export default AddCategory