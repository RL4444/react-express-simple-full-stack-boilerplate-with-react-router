import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import TestPage from './pages/TestPage';

// include all pages here
// Switch must wrap these pages

class App extends Component {
    render() {
        const App = () => (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/test' component={TestPage} />
                </Switch>
            </div>
        );
        return (
            <Switch>
                <App />
            </Switch>
        );
    }
}

export default App;
