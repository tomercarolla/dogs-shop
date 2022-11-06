import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const {title, imageUrl} = category;
    return (
        <div className="category-container">
            <div className="background-container" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="category-title">
                <h2>{title}</h2>
                <p>Shop now</p>
            </div>
        </div>
    )
}

export default CategoryItem;
