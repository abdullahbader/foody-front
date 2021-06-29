import logo from "./logo.svg";
import "./App.css";
import Routes from "./components/Routes"
import { useSelector } from "react-redux";


function App() {
  const ingrediants = useSelector((state) => state.ingrediants.ingrediants);
// const loading = useSelector((state) => state.products.loading);
  // const loadingShops = useSelector((state) => state.shops.loading);
  return <div>


    <Routes ingrediants={ingrediants} />
  </div>;
}

export default App;
