import {connect} from 'react-redux';
import {createReward} from '../../actions/reward_actions';

const msp = (state, ownProps) => ({
    project: state.entities.projects[this.props.match.params.projectId]
})

const mdp = dispatch => ({
    createReward: reward => dispatch(createReward(reward))
})

export default connect(msp,mdp)(RewardCreate)