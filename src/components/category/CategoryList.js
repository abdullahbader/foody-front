import { useState } from "react";
 import { Link } from "react-router-dom";
//components
import CategoryItem from "./CategoryItem";
//import SearchBar from "../SearchBar";

// Styling
import { List } from "../../styles";

import { useSelector } from "react-redux";

const CategoryList = () => {
 // const [query, setQuery] = useState("");
  const categories = useSelector((state) => state.categories.categories);
 // .filter((category) => category.name.toUpperCase().includes(query.toUpperCase()))
console.log(categories)
  let categoryArray = categories.map((category) => <CategoryItem category={category} key={category.id} />);
  return (
    <div>
      {/* <Link to="/categories/form">Add a Category</Link> */}
      {/* <SearchBar setQuery={setQuery} /> */}
      <Link to="/n">add category</Link>

      <List>{categoryArray}</List>
    </div>
  );
};

export default CategoryList;