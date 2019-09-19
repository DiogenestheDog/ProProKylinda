import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import * as APIUtils from './util/session_api_utils';
import configureStore from './store/store';
import * as PostUtils from './util/post.util';
import * as UserUtils from './util/user_util';
import { getPost, createPost, getAllPosts } from './actions/post_actions';
import { getAllUsers } from './actions/user_actions';

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
 
    window.signup = APIUtils.signup;
    window.login = APIUtils.login;
    window.logout = APIUtils.logout
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchPost = PostUtils.fetchPost;
    window.getPost = getPost;
    window.createPost = createPost;
    window.getAllPosts = getAllPosts;
    window.getAllUsers = getAllUsers;
    window.fetchAllUsers = UserUtils.fetchAllUsers

    ReactDOM.render(<Root store={store} />, root);
});