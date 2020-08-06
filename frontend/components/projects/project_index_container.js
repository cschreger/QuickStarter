import {connect} from 'react-redux';
import {fetchProjects} from '../../actions/project_actions';
import ProjectIndex from './project_index';

const msp = state => ({
    projects: Object.values(state.entities.projects)
})

const mdp = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects())
})

export default connect(msp,mdp)(ProjectIndex);