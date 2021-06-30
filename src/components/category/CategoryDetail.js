import { DetailWrapper } from "../../styles";
import { Image } from "../../styles";
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import DeleteButton from "../buttons/DeleteButton";
import { Link } from "react-router-dom";
import IngrediantList from "../ingrediant/IngrediantList";
const CategoryDetail = (props) => {
  const categories = useSelector((state) => state.categories.categories);
  const ingrediants = useSelector((state) => state.ingrediants.ingrediants);

  const categorySlug = useParams().categorySlug;
  console.log(categorySlug);
  const category = categories.find((category) => category.slug === categorySlug);
  const categoryIngrediants = category.ingrediants.map((ingrediant) =>
    ingrediants.find((_ingrediant) => _ingrediant.id === ingrediant.id)
  );

  if (!category) return <Redirect to="/" />;

  return (
    <DetailWrapper>
      <Link to={`/categories/${category.slug}/ingrediants/new`}>Add Ingrediant</Link>
      <h1>{category.name}</h1>
    
      <IngrediantList ingrediants={categoryIngrediants} />
      {/* <button onClick={() => props.setCrrrentCategory(null)}>Go Back</button>
      <DeleteButton categoryID={category.id} /> */}
    </DetailWrapper>
  );
};

export default CategoryDetail;