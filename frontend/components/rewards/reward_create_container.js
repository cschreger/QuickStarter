import {connect} from 'react-redux';
import {createReward} from '../../actions/reward_actions';
import RewardCreate from './reward_create';
import {fetchProject} from '../../actions/project_actions';

const msp = (state, ownProps) => {
    return {
    project: state.entities.projects[ownProps.match.params.projectId],
    currentUser: state.entities.users[state.session.id]

}}

const mdp = dispatch => ({
    createReward: reward => dispatch(createReward(reward)),
    fetchProject: projectId => dispatch(fetchProject(projectId))
})

export default connect(msp,mdp)(RewardCreate)