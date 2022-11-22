import './checkout.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {

    const {
        cartItems,
        totalAmount
    } = useContext(CartContext);

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    Product
                </div>
                <div className="header-block">
                    Description
                </div>
                <div className="header-block">
                    Quantity
                </div>
                <div className="header-block">
                    Price
                </div>
                <div className="header-block">
                    Remove
                </div>
            </div>
            {
                cartItems.map(product => {
                    return (
                        <CheckoutItem key={product.id} product={product}/>
                    )
                })
            }
            <div className="total">total: {totalAmount}</div>
        </div>
    )
}

export default Checkout;
