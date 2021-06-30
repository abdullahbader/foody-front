import { Clink } from "../../styles";
// import DeleteButton from "../buttons/DeleteButton";
const CategoriesItem = (props) => {
  const category = props.category;
  return (
    <div>
      {/* <UpdateButtonStyled to={/categories/${category.slug}/edit}>
        Update category
      </UpdateButtonStyled> /} */}
      <Clink to={`/categories/${category.slug}`}>
        <h1>{category.name}</h1>
      </Clink>
    </div>
  );
};

export default CategoriesItem;
