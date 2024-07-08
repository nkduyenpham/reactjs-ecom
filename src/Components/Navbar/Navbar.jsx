import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="cart logo" />
                <p>FASHIONISTA</p>
            </div>
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`nav-menu-container ${isMenuOpen ? 'open' : ''}`}>
                <ul className="nav-menu">
                    <li onClick={() => { setMenu("shop"); toggleMenu(); }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Shop</Link>
                        {menu === "shop" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("men"); toggleMenu(); }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/men">Men</Link>
                        {menu === "men" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("women"); toggleMenu(); }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/women">Women</Link>
                        {menu === "women" ? <hr /> : null}
                    </li>
                    <li onClick={() => { setMenu("kid"); toggleMenu(); }}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/kid">Kid</Link>
                        {menu === "kids" ? <hr /> : null}
                    </li>
                </ul>
                <div className="nav-login-cart">
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/cart"><img src={cart_icon} alt="cart icon" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;