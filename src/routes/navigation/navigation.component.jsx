import {Link, Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import {ReactComponent as DogLogo} from './../../assets/crown.svg';

import './navigation.styles.scss';
import {UserContext} from "../../context/user.context";
import {signOutUSer} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {

    const {currentUser} = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUSer();
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <DogLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutHandler}>SING OUT</span>
                        ) : (
                            <Link className="nav-link" to="/auth">SIGN IN</Link>
                        )
                    }
                    <CartIcon />
                </div>
                <CartDropdownComponent/>
            </div>
            <Outlet/>
        </Fragment>

    )
}

export default Navigation;
