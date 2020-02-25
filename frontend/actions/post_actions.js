import * as PostUtils from "../util/post.util"

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_ERRORS";

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

export const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

export const removePost = id => ({
    type: REMOVE_POST,
    id
});

export const receiveErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
});

export const createPost = post => dispatch => {
    return PostUtils.createPost(post)
        .then( post => dispatch(receivePost(post)),
            errors => dispatch(receiveErrors(errors))
        );
};

export const getPost = id => dispatch => {
    return PostUtils.fetchPost(id)
        .then( post => dispatch(receivePost(post)),
            errors => dispatch(receiveErrors(errors))
        );
};

export const getAllUserPosts = userId => dispatch => {
    return PostUtils.fetchAllUserPosts(userId)
        .then( posts => dispatch(receiveAllPosts(posts)),
            errors => dispatch(receiveErrors(errors))
        );
};

export const getAllPosts = () => dispatch => {
    return PostUtils.fetchAllPosts()
        .then( posts => dispatch(receiveAllPosts(posts)),
            errors => dispatch(receiveErrors(errors))
        );
};

export const deletePost = id => dispatch => {
    return PostUtils.deletePost(id)
        .then( post => dispatch(removePost(id)),
            errors => dispatch(receiveErrors(errors))
        );
};