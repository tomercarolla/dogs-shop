import {Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import {ReactComponent as DogLogo} from './../../assets/crown.svg';

import {LogoContainer, NavigationContainer, NavLink, NavsLinksContainer} from './navigation.styles';
import {UserContext} from "../../context/user.context";
import {signOutUSer} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../context/cart.context";

const Navigation = () => {

    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUSer();
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <DogLogo />
                </LogoContainer>
                <NavsLinksContainer>
                    <NavLink to="/shop">SHOP</NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutHandler}>SING OUT</NavLink>
                        ) : (
                            <NavLink to="/auth">SIGN IN</NavLink>
                        )
                    }
                    <CartIcon/>
                </NavsLinksContainer>
                {isCartOpen && <CartDropdownComponent/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>

    )
}

export default Navigation;
