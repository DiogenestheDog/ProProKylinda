import * as UserUtils from '../util/user_util';

export const UPDATE_USER = "UPDATE_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

export const getUser = id => dispatch => {
    return UserUtils.fetchUser(id)
        .then(
            user => dispatch(receiveUser(user)),
            errors => dispatch(receiveUserErrors())
        );
};

export const getAllUsers = () => dispatch => {
    return UserUtils.fetchAllUsers()
        .then(
            users => dispatch(receiveAllUsers(users)),
            errors => dispatch(receiveUserErrors(errors))
        );
};


// export const updateUser = user => ({
//     type: UPDATE_USER,
//     user
// });

// export const changeUser = user => dispatch => {
//     UserUtils.updateUser(user)
//         .then( user => dispatch(updateUser(user)),
//             errors => { console.log(errors); }
//         );
// };