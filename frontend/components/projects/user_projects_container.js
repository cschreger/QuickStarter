import {connect} from 'react-redux';
import {fetchProjects, deleteProject, editProject} from '../../actions/project_actions';
import UserProjects from './user_projects'

const msp = state => {
    return {
    userProjects: Object.values(state.entities.projects).filter(project => project.creator_id === state.entities.users[state.session.id].id)
    }
}

const mdp = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects()),
    deleteProject: projectId => dispatch(deleteProject(projectId)),
    // editProject: projectId => dispatch(editProject(projectId))
})

export default connect(msp,mdp)(UserProjects);