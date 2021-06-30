import { useState } from "react";
//components
import IngrediantItem from "./IngrediantItem";
import SearchBar from "../SearchBar";

// Styling
import { List } from "../../styles";
const IngrediantList = ({ ingrediants }) => {
  const [query, setQuery] = useState("");
  //const ingrediants = useSelector((state) => state.ingrediants.ingrediants);

  let ingrediantArray = ingrediants
    .filter((ingrediant) =>
      ingrediant.name.toUpperCase().includes(query.toUpperCase())
    )
    .map((ingrediant) => (
      <IngrediantItem ingrediant={ingrediant} key={ingrediant.id} />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <List>{ingrediantArray}</List>
    </div>
  );
};

export default IngrediantList;
