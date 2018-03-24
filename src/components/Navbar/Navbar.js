import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../Shared';

import './Navbar.scss';

export const Navbar = () => {
    return (
        <div className="nav__outer-container">
            <Container>
                <nav className="nav-container d-flex">
                    <Link className="nav__logo text-primary" to="/">The New York Times</Link>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;