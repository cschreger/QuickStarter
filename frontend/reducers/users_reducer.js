import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions'
import merge from 'lodash/merge'
import {RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT} from '../actions/project_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, { [action.user.id]: action.user });
        case RECEIVE_USER:
            return merge({}, oldState, { [action.user.id]: action.user });
        // case RECEIVE_ALL_PROJECTS:
        //     // debugger
        //     return merge({}, oldState, action.projects.users);
        case RECEIVE_PROJECT: 
            return merge({}, oldState, action.project.users);
        default:
            return oldState;
    }
};

export default usersReducer;