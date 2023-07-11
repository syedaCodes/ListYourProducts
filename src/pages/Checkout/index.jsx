import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItems from "./CheckoutItems";

const Checkout = () => {
    const { cartItems, totalPrice } = useContext(CartContext);

    return (
        <div className="checkout">
            <table>
                <thead>
                    <tr>
                        <td>Product</td>
                        <td>Description</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Remove</td>
                    </tr>
                </thead>
                <tbody>
                    {cartItems?.length ? (
                        cartItems?.map((item) => (
                            <CheckoutItems key={item.id} cartItem={item} />
                        ))
                    ) : (
                        <tr>
                            <td>
                                <span className="empty-message">
                                    Your cart is empty
                                </span>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="checkout__total">{`Total: $${totalPrice}`}</div>
        </div>
    );
};

export default Checkout;
