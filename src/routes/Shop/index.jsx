import { Route, Routes } from "react-router-dom";
import Categories from "../Categories";
import AllCategories from "../AllCategories";

const Shop = () => {
    return (
        <Routes>
            <Route index element={<Categories />} />
            <Route path=":category" element={<AllCategories />} />
        </Routes>
    );
};

export default Shop;
