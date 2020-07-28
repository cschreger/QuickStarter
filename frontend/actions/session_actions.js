import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors 
})

export const log_in = formUser => dispatch => (
    SessionAPIUtil.login(formUser)
        .then(user => dispatch(receiveCurrentUser(user)))
);

export const log_out = () => dispatch => (
    SessionAPIUtil.logout()
        .then(user => dispatch(logoutCurrentUser(user)))
);

export const sign_up = fomrUser => dispatch => (
    SessionAPIUtil.signup(formUser)
        .then(user => dispatch(receiveCurrentUser(user)))
);


