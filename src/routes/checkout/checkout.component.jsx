import './checkout.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const Checkout = () => {

    const {cartItems, addItemToCart, removeQuantity, removeProductFromCart} = useContext(CartContext);

    return (
        <div style={{display: "flex"}}>
            {
                cartItems.map(product => {
                    const {id, imageUrl, name, quantity, price} = product;

                    const addProductToCart = () => addItemToCart(product);

                    const removeQuantityFromProduct = () => removeQuantity(product);

                    const removeProduct = () => removeProductFromCart(product);

                    return (
                        <div key={id}>
                            <img src={imageUrl} alt=""/>
                            <div>{name}</div>
                            <div style={{display: "flex", gap: '8px'}}>
                                <div style={{cursor: "pointer"}} className="remove"
                                     onClick={removeQuantityFromProduct}> &#x3c; </div>
                                <span>{quantity}</span>
                                <div style={{cursor: "pointer"}} className="add"
                                     onClick={addProductToCart}> &#x3e; </div>
                            </div>
                            <div>
                                {price}
                            </div>
                            <div style={{cursor: "pointer"}} onClick={removeProduct}>X</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Checkout;
