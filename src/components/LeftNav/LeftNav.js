import React from 'react';
import { Link } from 'react-router-dom';

import './LeftNav.scss';

export const LeftNav = ({ filters, activeFilter, isLeftNavOpen, toggleLeftNav }) => {

    const leftNavClassName = isLeftNavOpen 
        ? 'left-nav__container left-nav__container--open'
        : 'left-nav__container';

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
        <nav className={leftNavClassName}>
            <div className="left-nav__wrapper">
                <div className="left-nav__title-container">
                    <h3 className="left-nav__title">Bestsellers</h3>
                    <i className="left-nav__close fa fa-times" aria-hidden="true" onClick={toggleLeftNav}></i>
                </div>
                {LinksComponent}
            </div>
        </nav>
    );
};

export default LeftNav;

