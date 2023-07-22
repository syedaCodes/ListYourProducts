import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoriesPreview from "../../components/categories/categoriesPreview";

const Categories = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <>
            {/* categoriesMap is an object that has titles holding arrays {title: [], title: []} */}
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoriesPreview
                        key={title}
                        title={title}
                        products={products}
                    />
                );
            })}
        </>
    );
};

export default Categories;
