import React from 'react';
import { Route } from 'react-router-dom';

import Corelayout from './layouts/Corelayout';
import HomeContainer from './components/Home/HomeContainer';

const App = () => (
    <main>
        <Corelayout>
            <Route exact path="/" component={HomeContainer} />
        </Corelayout>
    </main>
);

export default App;