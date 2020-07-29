import * as ProjectUtil from '../util/project_util'

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

const receiveAllProjects = projects => ({
    type: RECEIVE_ALL_PROJECTS,
    projects
});

const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
});

const removeProject = projectId => ({
    type: REMOVE_PROJECT,
    projectId
});

export const fetchProjects = () => (
    ProjectUtil.fetchProjects()
        .then(projects => dispatch(receiveAllProjects(projects)))
);

export const fetchProject = (projectId) => (
    ProjectUtil.fetchProject(projectId)
        .then(project => dispatch(receiveProject(project));
)