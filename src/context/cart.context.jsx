import {createContext, useEffect, useState} from "react";

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
    }
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const quantityTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(quantityTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeQuantity = (product) => {
        setCartItems(removeQuantityFromProduct(cartItems, product))
    }

    const removeProductFromCart = (product) => {
        setCartItems(removeProductFromCartItems(cartItems, product))
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        cartCount,
        addItemToCart,
        removeQuantity,
        removeProductFromCart
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
