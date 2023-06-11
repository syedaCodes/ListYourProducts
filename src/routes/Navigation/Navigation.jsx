import { Outlet, Link } from "react-router-dom";
import Icon from "../../assets/sprite.svg";

const Navigation = () => {
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
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
