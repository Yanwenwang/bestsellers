import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import LeftNavContainer from '../../components/LeftNav/LeftNavContainer';
import Footer from '../../components/Footer/Footer';
import { Container } from '../../components/Shared';

import './Corelayout.scss';
import '../../styles/core.scss';

export const Corelayout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <Navbar />
                <Container>
                    <div className="d-flex">
                        <LeftNavContainer /> 
                        {children} 
                    </div>
               </Container>
                <div className="push"></div>
            </div>
           <Footer />
        </React.Fragment>
    );
};

export default Corelayout;