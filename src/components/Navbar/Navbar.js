import React from 'react';

import { Container } from '../Shared';

import './Navbar.scss';

export const Navbar = ({ toggleLeftNav }) => {
    return (
        <div className="nav__outer-container">
            <Container>
                <nav className="nav__container">
                    <i className="nav__hamburger fa fa-bars" aria-hidden="true"
                        onClick={toggleLeftNav}></i>
                    <h3 className="nav__title">The New York Times Bestsellers</h3>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;