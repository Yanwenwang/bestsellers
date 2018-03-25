import React from 'react';
import { Link } from 'react-router-dom';

import './LeftNav.scss';

export const LeftNav = ({ filters }) => {

    const LinksComponent = filters.map((filter) => {
        const { url, display } = filter;

        return (
            <Link to={url}>{display}</Link>
        );
    });

    return (
        <nav className="left-nav__container">
            {LinksComponent}
        </nav>
    );
};

export default LeftNav;

