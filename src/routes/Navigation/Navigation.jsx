import { Outlet, Link } from "react-router-dom";
import Icon from "../../assets/sprite.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <>
            <div className="navigation">
                <Link className="navigation__logo">
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
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
