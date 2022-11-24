import ProductCard from "../product-card/product-card.component";
import {Link} from "react-router-dom";
import {CategoryPreviewStyles} from "./category-preview.styles";

const CategoryPreview = ({title, products}) => {
    return (
        <CategoryPreviewStyles>
            <h2>
                <Link className="title" to={title}>
                    {title.toUpperCase()}
                </Link>
            </h2>
            <div className="preview">
                {
                    products.slice(0, 4).map(product => {
                        return (
                            <ProductCard key={product.id} product={product}></ProductCard>
                        )
                    })
                }
            </div>
        </CategoryPreviewStyles>
    )
}

export default CategoryPreview
