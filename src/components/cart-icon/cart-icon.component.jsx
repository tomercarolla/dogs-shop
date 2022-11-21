import './cart-icon.styles.scss';
import {ReactComponent as BagIcon} from '../../assets/shopping-bag.svg';
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartItems} = useContext(CartContext);

    return (
        <div className="icon-container" onClick={() => setIsCartOpen(!isCartOpen)}>
            <BagIcon className="icon"/>
            <span>{cartItems.length}</span>
        </div>
    )
}

export default CartIcon
