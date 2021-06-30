import { Link } from "react-router-dom";
import { Div } from "../styles";
const NavProduct = () => {
  return (
    <Div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page" href="#">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/categories" class="nav-link" href="#">
            Category
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/ingrediants" class="nav-link" href="#">
            All Ingrediants
          </Link>
        </li>
      </ul>
    </Div>
  );
};

export default NavProduct;
