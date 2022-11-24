import CategoryItem from "../category-item/category-item.component";
import {CategoriesContainerStyles} from "./categories.styles";

const Categories = ({categories}) => {
    return (
        <CategoriesContainerStyles>
            {
                categories.map((category) => {
                    return (
                        <CategoryItem key={category.id} category={category}/>
                    )
                })
            }
        </CategoriesContainerStyles>
    );
}

export default Categories;
