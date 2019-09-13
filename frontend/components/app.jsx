import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util'
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import SplashContainer from './splash/splash_container';
import NavBar from './nav_bar/nav_bar';

const App = () => (
    <div>
        <NavBar />
        <header>
            <h1>I'm just tossing and turning</h1>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <ProtectedRoute path="/" component={SplashContainer} />
        </Switch>
    </div>
);

export default App