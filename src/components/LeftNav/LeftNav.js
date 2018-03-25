import React from 'react';
import { Link } from 'react-router-dom';

import './LeftNav.scss';

export const LeftNav = ({ filters }) => {

    const LinksComponent = filters.map((filter, index) => {
        const { url, displayName } = filter;

        return (
            <Link key={index} to={url}>{displayName}</Link>
        );
    });

    return (
        <nav className="left-nav__container">
            {LinksComponent}
        </nav>
    );
};

export default LeftNav;

