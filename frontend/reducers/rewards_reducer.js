import {RECEIVE_PROJECT_REWARDS, RECEIVE_REWARD} from '../actions/reward_actions';
import merge from 'lodash/merge';

const rewardsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_PROJECT_REWARDS:
            return merge({}, oldState, action.rewards);
        case RECEIVE_REWARD:
            return merge({}, oldState, {[action.reward.id]: action.reward});
        default: 
            return oldState;
    }
}

export default rewardsReducer;