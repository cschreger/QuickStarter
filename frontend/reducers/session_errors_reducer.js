import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER, RESET_ERRORS} from '../actions/session_actions'
import merge from 'lodash/merge'

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type){
        case RECEIVE_ERRORS:
            return merge({}, oldState, action.errors);
        case RECEIVE_CURRENT_USER:
            return [];
        case RESET_ERRORS:
            return [];
        default:
            return oldState;
    }
};

export default sessionErrorsReducer;