import {ReactComponent as BagIcon} from '../../assets/shopping-bag.svg';
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import {IconContainerStyles} from "./cart-icon.styles";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    return (
        <IconContainerStyles onClick={() => setIsCartOpen(!isCartOpen)}>
            <BagIcon className="icon"/>
            <span>{cartCount}</span>
        </IconContainerStyles>
    )
}

export default CartIcon
