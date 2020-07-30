import {connect} from 'react-redux';
import ProjectForm from './project_form';
import {createProject} from '../../actions/project_actions'

const mdp = dispatch => ({
    createProject: project => dispatch(createProject(project))
});

export default connect(null, mdp)(ProjectForm)