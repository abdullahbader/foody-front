// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// import { useHistory } from "react-router-dom";
// //actions
// import { createIngrediant } from "../../store/actions/ingrediantActions"
// //import { updateIngrediant } from "../store/actions/ingrediantActions";

// const FormIngrediant = () => {
//   const ingrediants = useSelector((state) => state.ingrediants.ingrediants);
//   const ingrediantSlug = useParams().ingrediantSlug;
//   const ingrediantSlug = useParams().ingrediantSlug;

//   const ingrediants = useSelector((state) => state.ingrediants.ingrediants);
//   const updatedIngrediant = ingrediants.find(
//     (ingrediant) => ingrediant.slug === ingrediantSlug
//   );
//   const [ingrediant, SetIngrediant] = useState(
//    // updatedIngrediant
//      // ? updatedIngrediant
//       //: 
//       {
//           ingrediantId: ingrediants.find((ingrediant) => ingrediant.slug === ingrediantSlug).id,
//           name: "",
     
//           image: "",
//         }
//   );
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const handleChange = (event) => {
//     SetIngrediant({ ...ingrediant, [event.target.name]: event.target.value });
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//    // if (updatedIngrediant) dispatch(updateIngrediant(ingrediant));
//     dispatch(createIngrediant(ingrediant));
//     history.push("/ingrediants");
//   };
//   const handleImage = (event) => {
//     SetIngrediant({ ...ingrediant, image: event.target.files[0] });
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       form
//       <div class="mb-3">
//         <label for="formGroupExampleInput" class="form-label">
//           Ingrediant Name
//         </label>
//         <input
//           type="text"
//           class="form-control"
//           id="formGroupExampleInput"
//           placeholder="Enter the ingrediant name"
//           name="name"
//           onChange={handleChange}
//           value={ingrediant.name}
//         />
//       </div>
     
      
//       <div class="mb-3">
//         <label for="formGroupExampleInput" class="form-label">
//           Ingrediant image
//         </label>
//         <input
//           type="file"
//           class="form-control"
//           id="formGroupExampleInput"
//           placeholder="Enter the ingrediant image"
//           name="image"
//           onChange={handleImage}
//         />
//       </div>
//       <button type="submit"> Submit </button>
//     </form>
//   );
// };

// export default FormIngrediant;
