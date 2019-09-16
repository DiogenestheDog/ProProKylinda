import * as UserUtils from '../util/user_util';

export const UPDATE_USER = "UPDATE_USER";

export const updateUser = user => ({
    type: UPDATE_USER,
    user
});

export const changeUser = user => dispatch => {
    UserUtils.updateUser(user)
        .then( user => dispatch(updateUser(user)),
            errors => { console.log(errors); }
        );
};