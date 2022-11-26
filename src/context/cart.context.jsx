import {createContext, useReducer} from "react";
import {createAction} from '../utils/reducer/reducer.utils'

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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {
    },
    cartCount: 0,
    removeQuantity: () => {
    },
    removeProductFromCart: () => {
    },
    totalAmount: 0,
})

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_OPEN: 'SET_CART_OPEN'
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    totalAmount: 0
}

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw Error(`Cart error type: ${type}`)
    }
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const {isCartOpen, cartItems, cartCount, totalAmount} = state;

    const updateCartItemsReducer = (newCartItems) => {
        const quantityTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const priceTotal = newCartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);

        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
            cartItems: newCartItems,
            cartCount: quantityTotal,
            totalAmount: priceTotal
        }));
    }

    const setIsCartOpen = (response) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_OPEN, response));
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeQuantity = (product) => {
        const newCartItems = removeQuantityFromProduct(cartItems, product);
        updateCartItemsReducer(newCartItems);
    }

    const removeProductFromCart = (product) => {
        const newCartItems = removeProductFromCartItems(cartItems, product);
        updateCartItemsReducer(newCartItems);
    }

    const value = {
        isCartOpen,
        cartItems,
        cartCount,
        totalAmount,
        setIsCartOpen,
        addItemToCart,
        removeQuantity,
        removeProductFromCart
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
