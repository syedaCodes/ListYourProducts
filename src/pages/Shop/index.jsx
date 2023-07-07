import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/productCard";

const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className="product">
            {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Shop;
