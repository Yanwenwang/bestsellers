import React from 'react';
import { Link } from 'react-router-dom';

import './LeftNav.scss';

export const LeftNav = ({ filters, activeFilter }) => {

    const LinksComponent = filters.map((filter, index) => {
        const { id, url, displayName } = filter;
        const className = activeFilter === id 
            ? 'left-nav__link left-nav__link--active'
            : 'left-nav__link';

        return (
            <Link className={className} key={index} to={url}>{displayName}</Link>
        );
    });

    return (
        <nav className="left-nav__container">
            <h3 className="left-nav__title">Bestsellers</h3>
            {LinksComponent}
        </nav>
    );
};

export default LeftNav;

