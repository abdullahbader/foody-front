import "./App.css";
import Routes from "./components/Routes";
import { useSelector } from "react-redux";
import PacmanLoader from "react-spinners/PacmanLoader";
import NavBar from "./components/NavBar";
import { Body } from "./styles";
function App() {
  const ingrediants = useSelector((state) => state.ingrediants.ingrediants);
  const loading = useSelector((state) => state.ingrediants.loading);
  const loadingCategories = useSelector((state) => state.categories.loading);
  return (
    <Body>
      <NavBar />
      {loading || loadingCategories ? (
        <PacmanLoader />
      ) : (
        <Routes ingrediants={ingrediants} />
      )}
    </Body>
  );
}

export default App;
