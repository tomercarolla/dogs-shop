import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {CheckoutContainer, CheckoutHeader, CheckoutHeaderBlock, CheckoutTotal} from "./checkout.styles";
import {useSelector} from "react-redux";
import {selectCartItems, selectPriceTotal} from "../../store/cart/cart.selector";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const totalAmount = useSelector(selectPriceTotal);

    const headerTitles = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

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
