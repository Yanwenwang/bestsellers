import React from 'react';
import { Link } from 'react-router-dom';

import './LeftNav.scss';

export const LeftNav = ({ filters }) => {

    const LinksComponent = filters.map((filter) => {
        const { url, displayName } = filter;

        return (
            <Link to={url}>{displayName}</Link>
        );
    });

    return (
        <nav className="left-nav__container">
            {LinksComponent}
        </nav>
    );
};

export default LeftNav;

