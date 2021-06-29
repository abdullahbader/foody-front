import { useState } from "react";
//components
import IngrediantItem from "./IngrediantItem";
//import SearchBar from "./SearchBar";

// Styling
const IngrediantList = ({ ingrediants }) => {
  // const [query, setQuery] = useState("");
  //const ingrediants = useSelector((state) => state.ingrediants.ingrediants);

  let ingrediantArray = ingrediants.map((ingrediant) => <IngrediantItem ingrediant={ingrediant} key={ingrediant.id} />);

    // .filter((ingrediant) =>
    //   ingrediant.name.toUpperCase().includes(query.toUpperCase())
    // )
  return (
    <div>
     
     {/* <SearchBar setQuery={setQuery} /> */}
      <ul>{ingrediantArray}</ul>
    </div>
  );
};

export default IngrediantList;