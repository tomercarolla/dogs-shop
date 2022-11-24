import {CategoryItemContainerStyles, BackgroundImage} from "./category-item.styles";
import {useNavigate} from "react-router-dom";

const CategoryItem = ({category}) => {
    const {title, imageUrl, route} = category;

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <CategoryItemContainerStyles onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <div className="category-title">
                <h2>{title}</h2>
                <p>Shop now</p>
            </div>
        </CategoryItemContainerStyles>
    )
}

export default CategoryItem;
