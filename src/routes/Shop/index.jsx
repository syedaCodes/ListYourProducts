import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Categories from "../Categories";
import AllCategories from "../AllCategories";
import { onFetchCategories } from "../../store/categories/categories.saga";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(onFetchCategories());
    }, []);

    return (
        <Routes>
            <Route index element={<Categories />} />
            <Route path=":category" element={<AllCategories />} />
        </Routes>
    );
};

export default Shop;
