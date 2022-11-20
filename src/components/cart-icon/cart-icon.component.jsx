import './cart-icon.styles.scss';
import {ReactComponent as BagIcon} from '../../assets/shopping-bag.svg';

const CartIcon = () => {
    return (
        <div className="icon-container">
            <BagIcon className="icon"/>
            <span>10</span>
        </div>
    )
}

export default CartIcon
