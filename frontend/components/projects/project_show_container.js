import {connect} from 'react-redux';
import {fetchProject, updateProject, deleteProject} from '../../actions/project_actions';
import ProjectShow from './project_show';
import {createBacking} from '../../actions/backing_actions';




const msp = (state, ownProps) => {
    debugger
    return {project: state.entities.projects[ownProps.match.params.projectId] || {},
    creator: state.entities.projects.creator,
    currentUser: state.entities.users[state.session.id]}
};

const mdp = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    updateProject: project => dispatch(updateProject(project)),
    deleteProject: projectId => dispatch(deleteProject(projectId)),
    createBacking: backing => dispatch(createBacking(backing))
});

export default connect(msp, mdp)(ProjectShow);