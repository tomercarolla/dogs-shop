import './category.styles.scss';
import {useParams} from "react-router-dom";
import {Fragment, useContext, useEffect, useState} from "react";
import {CategoriesContext} from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className="category-product-title">{category.toUpperCase()}</h2>

            <div className="category-product-container">
                {
                    products && products.map(product => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </Fragment>

    )

}

export default Category
