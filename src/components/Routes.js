import { Route, Switch } from "react-router";
// //Home components
// import Home from "./Home";
// import FormProduct from "./FormProduct ";
// //ProductList components
import IngrediantList from "./ingrediant/IngrediantList";
//import ProductDetail from "./ProductDetail";
import CategoryList from "./category/CategoryList";
import CategoryDetail from "./category/CategoryDetail";
import AddIngrediant from "./ingrediant/AddIngrediant";
import AddCategory from "./category/AddCategory";
import Home from "./Home";
function Routes(props) {
  return (
    <Switch>
      <Route path="/categories/new">
        <AddCategory />
      </Route>
      <Route path="/categories/:categorySlug/ingrediants/new">
        <AddIngrediant />
      </Route>
      <Route path="/categories/:categorySlug">
        <CategoryDetail />
      </Route>

      <Route path="/ingrediants">
        <IngrediantList ingrediants={props.ingrediants} />
      </Route>

      <Route path="/categories">
        <CategoryList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
export default Routes;
