import {connect} from 'react-redux';
import {createReward} from '../../actions/reward_actions';
import RewardCreate from './reward_create'

const msp = (state, ownProps) => ({
    project: state.entities.projects[ownProps.match.params.projectId]
})

const mdp = dispatch => ({
    createReward: reward => dispatch(createReward(reward))
})

export default connect(msp,mdp)(RewardCreate)