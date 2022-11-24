import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import {CheckoutItemStyles} from "./checkout-item.styles";

const CheckoutItem = ({product}) => {
    const {imageUrl, name, quantity, price} = product;

    const {
        addItemToCart,
        removeQuantity,
        removeProductFromCart
    } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    const removeQuantityFromProduct = () => removeQuantity(product);

    const removeProduct = () => removeProductFromCart(product);

    return (
        <CheckoutItemStyles>
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="name">{name}</div>
            <div className="quantity" style={{display: "flex", gap: '8px'}}>
                <div className="arrow"
                     onClick={removeQuantityFromProduct}> &#x3c; </div>
                <span className="value">{quantity}</span>
                <div className="arrow"
                     onClick={addProductToCart}> &#x3e; </div>
            </div>
            <div className="price">
                {price}
            </div>
            <div className="remove-button" onClick={removeProduct}>X</div>
        </CheckoutItemStyles>
    )
}

export default CheckoutItem
