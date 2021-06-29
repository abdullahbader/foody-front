import axios from "axios";
import * as actionTypes from "./types";



export const createIngrediant = (newIngrediant) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newIngrediant) {
        formData.append(key, newIngrediant[key]);
      }
      const res = await axios.post(
       `http://localhost:8000/categories/${newIngrediant.categoryId}/ingrediants`, formData);
      dispatch({
        type: actionTypes.CREATE_INGREDIANT,
        payload: {
          newIngrediant: res.data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const updateIngrediant = (updateIngrediant) => {
//   return async (dispatch) => {
//     try {
//       const formData = new FormData();
//       for (const key in updateIngrediant) {
//         formData.append(key, updateIngrediant[key]);
//       }
//       const res = await axios.put(
//         http://localhost:8000/ingrediants/${updateIngrediant.id},
//         formData
//       );
//       dispatch({
//         type: actionTypes.UPDATE_INGREDIANT,
//         payload: { updateIngrediant: res.data },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };



export const fetchIngrediants = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/ingrediants");
      dispatch({
        type: actionTypes.FETCH_INGREDIANTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};