import React from 'react';

import NavbarContainer from '../../components/Navbar/NavbarContainer';
import LeftNavContainer from '../../components/LeftNav/LeftNavContainer';
import Footer from '../../components/Footer/Footer';
import { Container } from '../../components/Shared';

import './Corelayout.scss';
import '../../styles/core.scss';

export const Corelayout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <NavbarContainer />
                <Container>
                    <div className="corelayout__container">
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