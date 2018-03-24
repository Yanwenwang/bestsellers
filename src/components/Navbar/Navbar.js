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
                    <ul className="nav__group d-flex m-0">
                        <li>
                            <Link className="nav__item text-primary" to="/about">Home</Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;