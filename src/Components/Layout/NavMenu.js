import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <Fragment>
      <div className="header__links">
        <Link 
            to="/"
            // activeClass="is-active"
            className="header__links--link">
            Home
        </Link>
        <Link 
            to="/add-products" 
            // activeClass="is-active" 
            className="header__links--link">
            Add Products
        </Link>
      </div>
    </Fragment>
  )
}

export default NavMenu;