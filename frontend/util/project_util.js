export const fetchProjects = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/projects'
    })
};

export const fetchProject = projectId => {
    return $.ajax({
        method: 'GET',
        url: `api/projects/${projectId}`
    })
};

export const createProject = project => {
    return $.ajax({
        method: 'POST',
        url: 'api/projects',
        data: project,
        processData: false,
        contentType: false
    })
};

export const updateProject = project => {
    debugger
    return $.ajax({
        method: "PATCH",
        url: `api/projects/${project.id}`,
        data: {project}
    })
};

export const deleteProject = projectId => {
    return $.ajax({
        method: "DELETE",
        url: `api/projects/${projectId}`
    })
};