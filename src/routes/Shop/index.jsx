import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Categories from "../Categories";
import AllCategories from "../AllCategories";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { getCategories } from "../../store/categories/categories.action";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(getCategories(categoriesArray));
        };

        fetchCategoriesMap();
    }, []);

    return (
        <Routes>
            <Route index element={<Categories />} />
            <Route path=":category" element={<AllCategories />} />
        </Routes>
    );
};

export default Shop;
