import logo from "./logo.svg";
import "./App.css";
import Routes from "./components/Routes"
import { useSelector } from "react-redux";
import PacmanLoader from "react-spinners/PacmanLoader"


function App() {
  const ingrediants = useSelector((state) => state.ingrediants.ingrediants);
 const loading = useSelector((state) => state.ingrediants.loading);
   const loadingCategories = useSelector((state) => state.categories.loading);
  return <div>

{loading || loadingCategories ? (
        <PacmanLoader />
      ) : (
        <Routes ingrediants={ingrediants} />
        )}

  </div>;
}

export default App;
