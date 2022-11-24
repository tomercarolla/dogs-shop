import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import {useNavigate} from "react-router-dom";
import {CartDropdownStyles, CartItemsStyles} from "./cart-dropdown.styles";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownStyles>
            <CartItemsStyles>
                {
                    cartItems.length ? cartItems.map(item => <CartItem key={item.id} cartItem={item}/>) :
                        <div className="empty-message">No Items</div>
                }
            </CartItemsStyles>
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </CartDropdownStyles>
    )
}

export default CartDropdown
