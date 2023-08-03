import CategoriesPreview from "../../components/categories/categoriesPreview";
import { useSelector } from "react-redux";
import { selectorCategoriesMap } from "../../store/categories/categories.selector";

const Categories = () => {
    const categoriesMap = useSelector(selectorCategoriesMap);

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
