import { combineReducers } from "redux";
import ingrediantReducer from "./ingrediantReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
    categories: categoryReducer,
    ingrediants: ingrediantReducer,
});
export default rootReducer;