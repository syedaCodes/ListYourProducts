import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/productCard";
import { useSelector } from "react-redux";
import { selectorCategoriesMap } from "../../store/categories/categories.selector";

const AllCategories = () => {
    const { category } = useParams();

    const categoriesMap = useSelector(selectorCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <div className="productWrapper">
            {category && <h2>{category}</h2>}
            <div className="product">
                {products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default AllCategories;
