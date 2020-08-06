import {connect} from 'react-redux';
import CategoryProjects from './category_projects';
import {fetchProjects} from '../../actions/project_actions';

const msp = (state, ownProps) => {
    return {
    projects: Object.values(state.entities.projects).filter(project => project.category_id === parseInt(ownProps.match.params.categoryId))
    }
}

const mdp = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects())
})

export default connect(msp,mdp)(CategoryProjects);