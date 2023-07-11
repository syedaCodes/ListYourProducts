import { useContext } from "react";
import Button from "../layouts/Button";
import { CartContext } from "../contexts/cart.context";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <div className="product__card">
            <img src={imageUrl} alt={name} />
            <div className="product__card--footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType="btn-secondary" onClick={addProductToCart}>
                Add to cart
            </Button>
        </div>
    );
};

export default ProductCard;
