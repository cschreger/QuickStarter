import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions'
import merge from 'lodash/merge'

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type){
        case RECEIVE_ERRORS:
            return merge({}, oldState, {[errors]: action.errors});
        case RECEIVE_CURRENT_USER:
            let nextState = Object.assign({}, oldState);
            delete nextState[errors];
            return nextState;
        default:
            return oldState;
    }
};

export default sessionErrorsReducer;