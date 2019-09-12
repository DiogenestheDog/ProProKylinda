import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util'
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import Splash from './splash/splash';
const App = () => (
    <div>
        <header>
            <h1>I'm just tossing and turning</h1>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <ProtectedRoute path="/" component={Splash} />
        </Switch>
    </div>
);

export default App