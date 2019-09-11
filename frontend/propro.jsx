import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import * as APIUtils from './utils/session_api_utils'
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById('root');
    const store = configureStore()
    window.signup = APIUtils.signup;
    window.login = APIUtils.login;
    window.logout = APIUtils.logout
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root);
});