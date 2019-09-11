import React from 'react';
import { Route } from 'react-router-dom';


import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';

const App = () => (
    <div>
        <header>
            <h1>I'm just tossing and turning</h1>
        </header>
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignupContainer} />
    </div>
);

export default App