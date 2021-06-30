//actions
import * as actionTypes from "../actions/types";

const initialState = {
  categories: [],
  loading: true,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload.newCategory],
      };

    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
      
    default:
      return state;
  }
};

export default categoryReducer;
