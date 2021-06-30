import { Dlink, Titled } from "../../styles";
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
// import DeleteButton from "../buttons/DeleteButton";
import IngrediantList from "../ingrediant/IngrediantList";
const CategoryDetail = (props) => {
  const categories = useSelector((state) => state.categories.categories);
  const ingrediants = useSelector((state) => state.ingrediants.ingrediants);

  const categorySlug = useParams().categorySlug;
  console.log(categorySlug);
  const category = categories.find(
    (category) => category.slug === categorySlug
  );
  const categoryIngrediants = category.ingrediants.map((ingrediant) =>
    ingrediants.find((_ingrediant) => _ingrediant.id === ingrediant.id)
  );

  if (!category) return <Redirect to="/" />;

  return (
    <div>
      <CategoryList />

      <Titled>{category.name}</Titled>

      <Dlink to={`/categories/${category.slug}/ingrediants/new`}>
        Add Ingrediant
      </Dlink>
      <div>
        <IngrediantList ingrediants={categoryIngrediants} />
        {/* <button onClick={() => props.setCrrrentCategory(null)}>Go Back</button>
      <DeleteButton categoryID={category.id} /> */}
      </div>
    </div>
  );
};

export default CategoryDetail;
