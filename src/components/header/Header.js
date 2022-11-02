import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <a href="/#"><img src={logo} alt="" /></a>
            <div>
                <a href="/orders">Orders</a>
                <a href="/review">Review</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;