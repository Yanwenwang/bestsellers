import React from 'react';

import Navbar from '../../components/Navbar/Navbar';

import '../../styles/core.scss';

export const Corelayout = ({ children }) => {
    return (
        <div>
            <Navbar />
           {children} 
        </div>
    );
};

export default Corelayout;