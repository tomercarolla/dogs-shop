import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import {useEffect} from "react";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {useDispatch} from "react-redux";
import {setCategoriesMap} from "../../store/categories/category.action";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            dispatch(setCategoriesMap(categoryMap));
        }

        getCategoryMap();
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}

export default Shop
