import {connect} from 'react-redux';
import {fetchProject, updateProject, deleteProject} from '../../actions/project_actions';
import ProjectShow from './project_show';
import {createBacking} from '../../actions/backing_actions';
import {fetchProjectRewards} from '../../actions/reward_actions';
import RewardItem from '../rewards/reward_item';




const msp = (state, ownProps) => {
    debugger
    return {project: state.entities.projects[ownProps.match.params.projectId],
    // creator: state.entities.projects[ownProps.match.params.projectId].creator,
    currentUser: state.entities.users[state.session.id],
    rewards: Object.values(state.entities.rewards).filter(reward => reward.project_id === parseInt(ownProps.match.params.projectId)),
    // backings = Object.values(state.entities.backings).filter(backing => backing.projectId === ownProps.match.params.projectId)
}
};

const mdp = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    updateProject: project => dispatch(updateProject(project)),
    deleteProject: projectId => dispatch(deleteProject(projectId)),
    createBacking: backing => dispatch(createBacking(backing)),
    fetchRewards: projectId => dispatch(fetchProjectRewards(projectId))
});

export default connect(msp, mdp)(ProjectShow);

//backing only on the show page directly and then /projects/:projectid/rewards should redirect to projectshow if you're not the owner 