import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util'
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import SplashContainer from './splash/splash_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import UserProfile from './profile/user_profile';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <ProtectedRoute exact path="/profile" component={UserProfile} />
            <ProtectedRoute path="/" component={SplashContainer} />
        </Switch>
    </div>
);

export default App