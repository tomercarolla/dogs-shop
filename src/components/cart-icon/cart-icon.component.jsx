import {BagIcon, IconContainerStyles} from "./cart-icon.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectCartCount, selectCartIsOpen} from "../../store/cart/cart.selector";
import {setIsCartOpen} from "../../store/cart/cart.action";

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectCartIsOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <IconContainerStyles onClick={toggleIsCartOpen}>
            <BagIcon />
            <span>{cartCount}</span>
        </IconContainerStyles>
    )
}

export default CartIcon
