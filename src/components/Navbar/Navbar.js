import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../Shared';

import './Navbar.scss';

export const Navbar = () => {
    return (
        <div className="nav__outer-container">
            <Container>
                <nav className="nav__container">
                    <h3 className="nav__title">The New York Times Bestsellers</h3>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;