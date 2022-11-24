import {CategoryItemContainerStyles, BackgroundImage} from "./category-item.styles";

const CategoryItem = ({category}) => {
    const {title, imageUrl} = category;

    return (
        <CategoryItemContainerStyles>
            <BackgroundImage imageUrl={imageUrl} />
            <div className="category-title">
                <h2>{title}</h2>
                <p>Shop now</p>
            </div>
        </CategoryItemContainerStyles>
    )
}

export default CategoryItem;
