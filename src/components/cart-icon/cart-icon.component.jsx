import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import {BagIcon, IconContainerStyles} from "./cart-icon.styles";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    return (
        <IconContainerStyles onClick={() => setIsCartOpen(!isCartOpen)}>
            <BagIcon />
            <span>{cartCount}</span>
        </IconContainerStyles>
    )
}

export default CartIcon
