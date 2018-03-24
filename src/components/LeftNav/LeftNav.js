import React from 'react';
import { Link } from 'react-router-dom';

import './LeftNav.scss';

export const LeftNav = () => {
    return (
        <nav className="left-nav__container">
            <Link to="/">All</Link>
            <Link to="/">Fiction</Link>
        </nav>
    );
};

export default LeftNav;