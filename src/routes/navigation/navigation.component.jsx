import {Outlet} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as DogLogo} from './../../assets/crown.svg';

import {LogoContainer, NavigationContainer, NavLink, NavsLinksContainer} from './navigation.styles';
import {signOutUSer} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selector";
import {selectCartIsOpen} from "../../store/cart/cart.selector";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectCartIsOpen)

    const signOutHandler = async () => {
        await signOutUSer();
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <DogLogo/>
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
