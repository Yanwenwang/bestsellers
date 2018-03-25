import React from 'react';
import { Route } from 'react-router-dom';

import Corelayout from './layouts/Corelayout';
import HomeContainer from './components/Home/HomeContainer';

const App = () => (
    <Corelayout>
        <Route exact path="/" component={HomeContainer} />
    </Corelayout>
);

export default App;