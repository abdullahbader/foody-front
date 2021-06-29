import axios from "axios";

import * as actionTypes from "./types";

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/categories");
      dispatch({
        type: actionTypes.FETCH_CATEGORIES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
