import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import * as APIUtils from './utils/session_api_utils'


document.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById('root');

    window.signup = APIUtils.signup;
    window.login = APIUtils.login;
    window.logout = APIUtils.logout

    ReactDOM.render(<Root />, root);
});