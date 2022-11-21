import {createContext, useState} from "react";

export const CartContext = createContext({
    isCartOpen: false,
    items: 0,
    setIsCartOpen: () => {},
    setItems: () => null,
})

export const CartProvider = ({children}) => {
    const [items, setItems] = useState(0);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen, items, setItems};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
