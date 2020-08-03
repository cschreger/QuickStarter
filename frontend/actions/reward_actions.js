import * as RewardUtil from '../util/rewards_util';

export const RECEIVE_PROJECT_REWARDS = "RECEIVE_PROJECT_REWARDS";
export const RECEIVE_REWARD = "RECEIVE_REWARD";

const receiveProjectRewards = rewards => ({
    type: RECEIVE_PROJECT_REWARDS,
    rewards
})

const receiveReward = reward => ({
    type: RECEIVE_REWARD,
    reward
})

export const fetchProjectRewards = projectId => dispatch => (
    RewardUtil.fetchProjectRewards(projectId)
        .then(rewards => dispatch(receiveProjectRewards(rewards)))
);

export const createReward = reward => dispatch => (
    RewardUtil.createReward(reward)
        .then(reward => dispatch(receiveReward(reward)))
);