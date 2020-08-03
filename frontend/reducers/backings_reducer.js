import {RECEIVE_PROJECT_BACKINGS, RECEIVE_BACKING} from '../actions/backing_actions';
import merge from 'lodash/merge'

const backingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_PROJECT_BACKINGS:
            return merge({}. oldState, {[action.backing.projectId]: action.backings});
        case RECEIVE_BACKING:
            return merge({}, oldState, action.backing);
        default:
            return oldState
    }
}

export default backingsReducer;