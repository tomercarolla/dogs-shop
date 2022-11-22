import {createContext, useState, useEffect} from "react";
import {addCollectionAndDocuments} from "../utils/firebase/firebase.utils";
import PRODUCTS from '../shop-data.json';
import SHOP_DATA from "../shop-db";

export const ProductsContext = createContext({
    products: [],
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    //run just one time to load the db data to firebase
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    const value = {products};

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
