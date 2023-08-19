import { useDispatch } from "react-redux";
import { addItem, deleteItem, removeItem } from "../../store/cart/cart.reducer";

const CheckoutItems = ({ product }) => {
    const dispatch = useDispatch();

    const { name, imageUrl, price, quantity } = product;

    const addItemToCart = () => dispatch(addItem(product));
    const removeItemFromCart = () => dispatch(removeItem(product));
    const deleteItemFromCart = () => dispatch(deleteItem(product));

    return (
        <tr>
            <td>
                <img src={imageUrl} alt={name} />
            </td>
            <td>{name}</td>
            <td>
                <button
                    className="btn btn-tertiary"
                    onClick={removeItemFromCart}
                >
                    &lt;
                </button>
                {quantity}
                <button className="btn btn-tertiary" onClick={addItemToCart}>
                    &gt;
                </button>
            </td>
            <td>${price}</td>
            <td>
                <button
                    className="btn btn-tertiary"
                    onClick={deleteItemFromCart}
                >
                    &#9587;
                </button>
            </td>
        </tr>
    );
};

export default CheckoutItems;
