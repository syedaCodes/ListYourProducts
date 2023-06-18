import { Outlet, Link } from "react-router-dom";
import Icon from "../../assets/sprite.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

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
                        <Link className="navigation__menu--li">Sign Out</Link>
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
