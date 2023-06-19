import Button from "../layouts/Button";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    return (
        <div className="product__card">
            <img src={imageUrl} alt={name} />
            <div className="product__card--footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="btn-secondary">Add to cart</Button>
        </div>
    );
};

export default ProductCard;
