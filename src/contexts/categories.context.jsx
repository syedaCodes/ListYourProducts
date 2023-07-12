import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../../shop-data";

export const CategoriesContext = createContext({
    categoriesMap: {},
    // setCategories: () => [],
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState([]);
    const value = { categoriesMap };

    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA);
    // }, []);

    const getCategoriesMap = async () => {
        const categoriesMap = await getCategoriesAndDocuments();
        setCategoriesMap(categoriesMap);
    };

    useEffect(() => {
        getCategoriesMap();
    }, []);

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};
