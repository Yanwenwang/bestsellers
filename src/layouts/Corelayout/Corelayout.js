import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import LeftNavContainer from '../../components/LeftNav/LeftNavContainer';
import { Container } from '../../components/Shared';

import '../../styles/core.scss';

export const Corelayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Container>
                <div className="d-flex">
                    <LeftNavContainer /> 
                    {children} 
                </div>
           </Container>
        </div>
    );
};

export default Corelayout;