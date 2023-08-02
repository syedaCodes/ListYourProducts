import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart/cartIcon";
import Icon from "../../assets/sprite.svg";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart/cartList";
import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);

    const { isCartOpen } = useContext(CartContext);

    return (
        <>
            <div className="navigation">
                <Link className="navigation__logo" to="/">
                    <svg className="navigation__logo--svg">
                        <use xlinkHref={`${Icon}#crown`}></use>
                    </svg>
                </Link>
                <div className="navigation__menu">
                    <Link className="navigation__menu--li" to="/shop">
                        Shop
                    </Link>
                    {currentUser ? (
                        <span onClick={signOutUser}>Sign Out</span>
                    ) : (
                        <Link className="navigation__menu--li" to="/sign-in">
                            Sign In
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
