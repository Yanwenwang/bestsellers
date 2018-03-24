import React from 'react';
import { Route } from 'react-router-dom';

import Corelayout from './layouts/Corelayout';
import Home from './components/Home/Home';

const App = () => (
    <main>
        <Corelayout>
            <Route exact path="/" component={Home} />
        </Corelayout>
    </main>
);

export default App;