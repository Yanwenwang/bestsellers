import React from 'react';

import './Loader.scss';

export const Loader = () => {
    return (
        <div className="loader__container">
            <i className="loader__icon fa fa-spinner fa-spin" aria-hidden="true"></i>
        </div>
    );
};

export default Loader;