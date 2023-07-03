import { useContext } from "react";
import Icon from "../assets/sprite.svg";
import { CartContext } from "../contexts/cart.context";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className="cartIcon" onClick={toggleIsCartOpen}>
            <svg>
                <use xlinkHref={`${Icon}#shopping-cart`}></use>
            </svg>
            <span className="cartIcon__count">0</span>
        </div>
    );
};

export default CartIcon;
