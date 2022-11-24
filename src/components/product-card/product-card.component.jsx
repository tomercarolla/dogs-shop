import './product-card.styles';
import Button from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import {ProductCardStyles} from "./product-card.styles";

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product)

    return (
        <ProductCardStyles>
            <img src={imageUrl} alt=""/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to Card</Button>
        </ProductCardStyles>
    )
}

export default ProductCard
