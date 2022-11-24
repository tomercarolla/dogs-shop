import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {CheckoutContainer, CheckoutHeader, CheckoutHeaderBlock, CheckoutTotal} from "./checkout.styles";

const Checkout = () => {

    const {
        cartItems,
        totalAmount
    } = useContext(CartContext);

    const headerTitles = ['Product','Description','Quantity','Price','Remove'];

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                {
                    headerTitles.map(title => (
                        <CheckoutHeaderBlock key={title}>
                            {title}
                        </CheckoutHeaderBlock>
                    ))
                }
            </CheckoutHeader>
            {
                cartItems.map(product => {
                    return (
                        <CheckoutItem key={product.id} product={product}/>
                    )
                })
            }
            <CheckoutTotal>total: {totalAmount}</CheckoutTotal>
        </CheckoutContainer>
    )
}

export default Checkout;
