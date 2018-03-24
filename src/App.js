import React from 'react';
import { Route } from 'react-router-dom';

import Corelayout from './layouts/Corelayout';
import Home from './components/Home/Home';
import About from './components/About/About';

const App = () => (
    <main>
        <Corelayout>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </Corelayout>
    </main>
);

export default App;