import {connect} from 'react-redux';
import {fetchProjects} from '../../actions/project_actions';
import UserProjects from './user_projects'

const msp = state => {
    debugger 
    return {
    userProjects: Object.values(state.entities.projects).filter(project => project.creator_id === state.entities.users[state.session.id].id)
    }
}

const mdp = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects())
})

export default connect(msp,mdp)(UserProjects);