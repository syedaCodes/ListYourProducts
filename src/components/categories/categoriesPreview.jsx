import ProductCard from "../productCard";

const CategoriesPreview = ({ title, products }) => {
    return (
        <div className="productWrapper" key={title}>
            <h2>{title}</h2>
            <div className="product">
                {products
                    ?.filter((_, index) => index < 4)
                    ?.map((product) => (
                        <ProductCard key={product?.id} product={product} />
                    ))}
            </div>
        </div>
    );
};

export default CategoriesPreview;
