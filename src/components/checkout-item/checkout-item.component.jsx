import {CheckoutItemStyles} from "./checkout-item.styles";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart, removeProductFromCart, removeQuantity} from "../../store/cart/cart.action";
import {selectCartItems} from "../../store/cart/cart.selector";

const CheckoutItem = ({product}) => {
    const {imageUrl, name, quantity, price} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    const removeQuantityFromProduct = () => dispatch(removeQuantity(cartItems, product));

    const removeProduct = () => dispatch(removeProductFromCart(cartItems, product));

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
