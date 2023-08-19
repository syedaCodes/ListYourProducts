import { useDispatch } from "react-redux";
import Button from "../layouts/Button";
import { addItem } from "../store/cart/cart.reducer";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const { name, price, imageUrl } = product;

    const addProductToCart = () => dispatch(addItem(product));

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
