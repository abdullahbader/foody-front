import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../store/actions/categoryActions";
import { useHistory } from "react-router-dom";

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: "",
  });
  const history = useHistory();

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCategory(category));
    history.push("/categories");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={category.name}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default AddCategory;
