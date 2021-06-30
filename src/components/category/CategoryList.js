import { useState } from "react";
//components
import CategoryItem from "./CategoryItem";
import SearchBar from "../SearchBar";

// Styling
import { List, Dlink, H3 } from "../../styles";

import { useSelector } from "react-redux";

const CategoryList = () => {
  const [query, setQuery] = useState("");
  const categories = useSelector((state) => state.categories.categories);
  console.log(categories);
  let categoryArray = categories
    .filter((category) =>
      category.name.toUpperCase().includes(query.toUpperCase())
    )
    .map((category) => <CategoryItem category={category} key={category.id} />);
  return (
    <div>
      {/* <Link to="/categories/form">Add a Category</Link> */}
      <H3>Categories</H3>
      <Dlink to="/categories/new">Add Category 🧂</Dlink>

      <SearchBar setQuery={setQuery} />

      <List>{categoryArray}</List>
    </div>
  );
};

export default CategoryList;
