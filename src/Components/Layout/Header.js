import Icons from '../../assets/sprite.svg';
import NavMenu from './NavMenu';

const Header = () => {

    return(
        <header>
            <div className="logo">
                <h1 title="List Your Products">LY Products</h1>
            </div>

            <NavMenu />
            
            <div className="profile">
                <a href="/#" className="header__links--link">Profile
                    <svg className="dropdown">
                        <use xlinkHref={`${Icons}#icon-sort-desc`}></use>
                    </svg>
                </a>
            </div>
        </header>
    );
}

export default Header;