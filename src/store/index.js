import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { fetchIngrediants } from "./actions/ingrediantActions";
import { fetchCategories } from "./actions/categoryActions";
import rootReducer from "./reducers/index";
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  rootReducer, // reducer function
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchIngrediants());
store.dispatch(fetchCategories());

export default store;