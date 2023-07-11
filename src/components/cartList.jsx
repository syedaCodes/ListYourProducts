import { useContext, useRef } from "react";
import Button from "../layouts/Button";
import useScrollbar from "../hooks/useScrollbar";
import CartListItem from "./cartListItem";
import { CartContext } from "../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartList = () => {
    const navigate = useNavigate();

    const dropdownRef = useRef(null);
    const { cartItems } = useContext(CartContext);
    const hasScrollbar = useScrollbar(dropdownRef, cartItems?.length);

    const navigateToCheckout = () => {
        navigate("/checkout");
    };

    return (
        <div className="cartList">
            <div
                className={`cartList__items ${
                    hasScrollbar ? "scrollable" : ""
                }`}
                ref={dropdownRef}
            >
                {cartItems?.length ? (
                    cartItems?.map((item) => (
                        <CartListItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <Button buttonType="btn btn-primary" onClick={navigateToCheckout}>
                Go To Checkout
            </Button>
        </div>
    );
};

export default CartList;
