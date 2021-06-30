import { Route, Switch } from "react-router";
// //Home components
// import Home from "./Home";
// import FormProduct from "./FormProduct ";
// //ProductList components
 import IngrediantList from "./ingrediant/IngrediantList"
 //import ProductDetail from "./ProductDetail";
 import CategoryList from "./category/CategoryList";
 import CategoryDetail from "./category/CategoryDetail";
 import AddIngrediant from "./ingrediant/AddIngrediant";
 import AddCategory from "./category/AddCategory";
function Routes(props) {
  return (
    <Switch>
    
      <Route path="/categories/:categorySlug/ingrediants/new">
        <AddIngrediant/>
      </Route>
      <Route  path="/categories/:categorySlug">
        <CategoryDetail />
      </Route>
      <Route path="/n">
       <AddCategory/>
       </Route>

      <Route path="/ingrediants">
        <IngrediantList ingrediants={props.ingrediants} />
      </Route>
     
      <Route path="/categories">
        <CategoryList />
      </Route>
    </Switch>
  );
}
export default Routes;