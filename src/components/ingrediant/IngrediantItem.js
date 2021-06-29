import { Link } from "react-router-dom";
const IngrediantItem = (props) => {
  const ingrediant = props.ingrediant;
  return (
    <div>
    {/* <UpdateButtonStyled to={/shops/${shop.slug}/edit}>
        Update shop
      </UpdateButtonStyled> */}
      <Link to={`/ingrediants/${ingrediant.slug}`}>
        <img src={ingrediant.image} alt={ingrediant.name} />
      </Link>
      <h1>{ingrediant.name}</h1>
    </div>
  );
};

export default IngrediantItem;
