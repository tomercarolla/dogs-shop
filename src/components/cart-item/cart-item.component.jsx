import {CartItemStyles} from "./cart-item.styles";

export const CartItem = ({cartItem}) => {

    const {name, imageUrl, price, quantity} = cartItem

    return (
        <CartItemStyles>
            <img src={imageUrl} alt=""/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span>{quantity} x ${price}</span>
            </div>
        </CartItemStyles>
    )
}

export default CartItem
