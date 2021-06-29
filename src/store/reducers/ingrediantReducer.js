//actions
import * as actionTypes from "../actions/types"

const initialState = {
  ingrediants: [],
  loading: true,
};

const ingrediantReducer = (state = initialState, action) => {
  switch (action.type) {
    

    case actionTypes.CREATE_INGREDIANT:
      return {
        ...state,
        ingrediants: [...state.ingrediants, action.payload.newIngrediant],
      };

    // case actionTypes.UPDATE_INGREDIANT:
    //   const { updateIngrediant } = action.payload;

    //   return {
    //     ...state,
    //     ingrediants: state.ingrediants.map((ingrediant) =>
    //       ingrediant.id === updateIngrediant.id ? updateIngrediant : ingrediant
    //     ),
    //   };
    
    case actionTypes.FETCH_INGREDIANTS:
      return {
        ...state,
        ingrediants: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default ingrediantReducer;
