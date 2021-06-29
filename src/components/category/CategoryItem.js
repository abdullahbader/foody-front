import { Image } from "../../styles";
import { Link } from "react-router-dom";
// import DeleteButton from "../buttons/DeleteButton";
const CategoriesItem = (props) => {
  const category = props.category;
  return (
    <div>
      {/* <UpdateButtonStyled to={/categories/${category.slug}/edit}>
        Update category
      </UpdateButtonStyled> /} */}
      <Link to={`/categories/${category.slug}`}>
      <h1>{category.name}</h1>

      </Link>
    </div>
  );
};

export default CategoriesItem;