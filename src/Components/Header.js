import React from 'react';
import { NavLink } from 'react-router-dom';
import Icons from '../assets/sprite.svg';

const Header = () => {

    return(
        <header>
            <div className="logo">
                    <h1>Tx</h1>
            </div>
            <div className="header__links">
                    <NavLink 
                    to="/"
                    activeClassName="is-active"
                    className="header__links--link"
                    exact >Home</NavLink>
                    <NavLink 
                    to="/manage" 
                    activeClassName="is-active" 
                    className="header__links--link"
                    exact >Manage Products</NavLink>
            </div>
            <div className="cart">
                <a href="/#" className="header__links--link">Shopping cart <svg className="dropdown"><use xlinkHref={`${Icons}#icon-sort-desc`}></use></svg></a>
            </div>
        </header>
    );
}

export default Header;