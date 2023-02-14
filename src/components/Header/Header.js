import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='nav-link'>
            <nav>
                <Link to='home'>Home</Link>
                <Link to='about'>About</Link>
                <Link to='friends'>Friends</Link>
            </nav>
        </div>
    );
};

export default Header;