import {
    RECEIVE_ALL_PROJECTS, 
    RECEIVE_PROJECT, 
    REMOVE_PROJECT} from '../actions/project_actions';
import merge from 'lodash/merge';

const projectsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_ALL_PROJECTS:
            return merge({}, oldState, action.projects);
        case RECEIVE_PROJECT:
            return merge({}, oldState, {[action.project.id]: action.project});
        case REMOVE_PROJECT:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.projectId];
            return nextState;
        default:
            return oldState;
            
    }
}

export default projectsReducer;

