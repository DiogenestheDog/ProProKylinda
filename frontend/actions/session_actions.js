
import * as SessionUtils from '../utils/session_api_utils';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const signup = user => dispatch => {
    SessionUtils.signup(user)
        .then( user => dispatch(signup(user)),
            errors => dispatch(receiveErrors(errors)));
};

export const login = user => dispatch => {
    SessionUtils.login(user)
        .then(user => dispatch(login(user)),
            errors => dispatch(receiveErrors(errors)));
};

export const logout = () => dispatch => {
    SessionUtils.logout()
        .then( () => dispatch(logout),
            errors => dispatch(receiveErrors(errors)));
};