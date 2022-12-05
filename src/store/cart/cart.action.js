import {createAction} from "../../utils/reducer/reducer.utils";
import {CART_ACTION_TYPES} from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeQuantityFromProduct = (cartItems, product) => {
    if (product.quantity === 1) {
        return cartItems;
    }

    return cartItems.map(cartItem => cartItem.id === product.id ?
        {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
}

const removeProductFromCartItems = (cartItems, product) => {
    return cartItems.filter(cartItem => cartItem.id !== product.id);
}

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeQuantity = (cartItems, product) => {
    const newCartItems = removeQuantityFromProduct(cartItems, product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeProductFromCart = (cartItems, product) => {
    const newCartItems = removeProductFromCartItems(cartItems, product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const setIsCartOpen = (isCartOpen) => createAction(CART_ACTION_TYPES.SET_CART_OPEN, isCartOpen);
