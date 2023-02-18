import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  return (
    <div className="header__links">
        <NavLink 
            to="/"
            activeClassName="is-active"
            className="header__links--link"
            exact >
            Home
        </NavLink>
        <NavLink 
            to="/add-products" 
            activeClassName="is-active" 
            className="header__links--link"
            exact >
            Manage Products
        </NavLink>
    </div>
  )
}

export default NavMenu;