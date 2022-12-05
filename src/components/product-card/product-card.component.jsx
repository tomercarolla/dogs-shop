import './product-card.styles';
import Button, {Color} from "../button/button.component";
import {ProductCardStyles} from "./product-card.styles";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../store/cart/cart.action";
import {selectCartItems} from "../../store/cart/cart.selector";

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCardStyles>
            <img src={imageUrl} alt=""/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button color={Color.inverted} onClick={addProductToCart}>Add to Card</Button>
        </ProductCardStyles>
    )
}

export default ProductCard
