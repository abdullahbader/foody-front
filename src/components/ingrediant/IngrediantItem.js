import { Link } from "react-router-dom";
import { Image, H3 } from "../../styles";
const IngrediantItem = (props) => {
  const ingrediant = props.ingrediant;
  return (
    <div>
      {/* <UpdateButtonStyled to={/shops/${shop.slug}/edit}>
        Update shop
      </UpdateButtonStyled> */}
      <Link to={`/ingrediants/${ingrediant.slug}`}>
        <Image src={ingrediant.image} alt={ingrediant.name} />
      </Link>
      <H3>{ingrediant.name}</H3>
    </div>
  );
};

export default IngrediantItem;
