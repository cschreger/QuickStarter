import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';
import ProjectMainPage from './project_main_page';

const projectsWithAuthors = (state) => {
  return Object.values(state.entities.projects).map((project) => {
      let creator = state.entities.projects["users"][project.creator_id]
      if (project.id !== undefined){
        return Object.assign({}, project, {creatorName: creator.name})
      }
  })
};

const msp = state => {
    return {
        projects: projectsWithAuthors(state)
        // projectsWithAuthors: projectsWithAuthors(state)
    }
}

const mdp = dispatch => {
    return {
    fetchProjects: () => dispatch(fetchProjects())}
}

export default connect(msp, mdp)(ProjectMainPage);