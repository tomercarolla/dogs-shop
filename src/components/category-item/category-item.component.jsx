import {CategoryItemContainerStyles} from "./category-item.styles";

const CategoryItem = ({category}) => {
    const {title, imageUrl} = category;

    return (
        <CategoryItemContainerStyles>
            <div className="background-container" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="category-title">
                <h2>{title}</h2>
                <p>Shop now</p>
            </div>
        </CategoryItemContainerStyles>
    )
}

export default CategoryItem;
