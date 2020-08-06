import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';
import ProjectMainPage from './project_main_page';


const msp = state => {
    debugger
    return {
        projects: Object.values(state.entities.projects),

    }
}

const mdp = dispatch => {
    return {
    fetchProjects: () => dispatch(fetchProjects())}
}

export default connect(msp, mdp)(ProjectMainPage);