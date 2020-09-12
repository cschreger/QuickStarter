import { connect } from 'react-redux';
import { fetchProject, updateProject } from '../../actions/project_actions';
import EditProject from './edit_project'

const msp = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.match.params.projectId],
        currentUser: state.entities.users[state.session.id],
    }
};

const mdp = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    updateProject: project => dispatch(updateProject(project)),
});

export default connect(msp, mdp)(EditProject);