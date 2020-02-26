import { RECEIVE_POST, RECEIVE_ALL_POSTS, REMOVE_POST } from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);

    console.log(Object.keys(action));

    switch(action.type) {
        
        case RECEIVE_POST:
            return Object.assign({}, state, action.post );

        case RECEIVE_ALL_POSTS:
            return Object.assign({}, state, action.posts)

        case REMOVE_POST:
            let new_state = Object.assign({}, state);
            delete new_state.posts[action.id];
            return new_state
        
        default:
            return state;
    }
};

export default postsReducer;