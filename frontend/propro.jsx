import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import * as APIUtils from './util/session_api_utils'
import configureStore from './store/store';
+

document.addEventListener("DOMContentLoaded", () => {
    
    let store
    let root = document.getElementById('root');
    if(window.currentUser) {
        const { currentUser } = window;
        const { id } = currentUser;
        const preloadedState = {
            entities: {
                users: {
                    [id]: currentUser
                }
            },
            session: { id }
        };

        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
 
    // window.signup = APIUtils.signup;
    // window.login = APIUtils.login;
    // window.logout = APIUtils.logout
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root);
});