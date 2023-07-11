import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItems = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
        useContext(CartContext);

    const addItem = () => addItemToCart(cartItem);
    const removeItem = () => removeItemFromCart(cartItem);
    const deleteItem = () => deleteItemFromCart(cartItem);

    return (
        <tr>
            <td>
                <img src={imageUrl} alt={name} />
            </td>
            <td>{name}</td>
            <td>
                <button className="btn btn-tertiary" onClick={removeItem}>
                    &lt;
                </button>
                {quantity}
                <button className="btn btn-tertiary" onClick={addItem}>
                    &gt;
                </button>
            </td>
            <td>${price}</td>
            <td>
                <button className="btn btn-tertiary" onClick={deleteItem}>
                    &#9587;
                </button>
            </td>
        </tr>
    );
};

export default CheckoutItems;
