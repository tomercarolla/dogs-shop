import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ProductCard from "../../components/product-card/product-card.component";
import {CategoryComponentStyles} from "./category.styles";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/category.selector";

const Category = () => {
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]);

    return (
        <CategoryComponentStyles>
            <h2 className="category-product-title">{category.toUpperCase()}</h2>

            <div className="category-product-container">
                {
                    products && products.map(product => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </CategoryComponentStyles>

    )

}

export default Category
