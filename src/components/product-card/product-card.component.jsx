import './product-card.styles.scss';
import Button from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCard = () => addItemToCart(product)

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt=""/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCard}>Add to Card</Button>
        </div>
    )
}

export default ProductCard
