import {
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER} from '../actions/session_actions'
import merge from 'lodash/merge'

const sessionReducer = (oldState = {id: null}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, action.user);
        case LOGOUT_CURRENT_USER:
            return merge({}, oldState, {id: null})
        default:
            return oldState; 
    }
};

export default sessionReducer;