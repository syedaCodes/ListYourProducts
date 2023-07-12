import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/productCard";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <>
            {/* categoriesMap is an object that has titles holding arrays {title: [], title: []} */}
            {Object.keys(categoriesMap).map((title) => (
                <div className="productWrapper" key={title}>
                    <h2>{title}</h2>
                    <div className="product">
                        {categoriesMap[title]?.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Shop;
