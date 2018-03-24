import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import LeftNav from '../../components/LeftNav/LeftNav';
import { Container } from '../../components/Shared';

import '../../styles/core.scss';

export const Corelayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Container>
                <div className="d-flex">
                    <LeftNav /> 
                    {children} 
                </div>
           </Container>
        </div>
    );
};

export default Corelayout;