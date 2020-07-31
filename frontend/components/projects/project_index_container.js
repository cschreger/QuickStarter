import {connect} from 'react-redux';
import {fetchProjects} from '../../actions/project_actions';
import ProjectIndex from './project_index';
import { fetchProject } from '../../util/project_util';

const msp = state => ({
    projects: state.entities.projects
})

const mdp = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects())
})

export default connect(msp,mdp)(ProjectIndex);