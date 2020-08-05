export const fetchProjectRewards = projectId => {
    return $.ajax({
        method: 'GET',
        url: `api/projects/${projectId}/rewards`
    })
};

export const createReward = reward => {
    return $.ajax({
        method: 'POST',
        url: `api/projects/14/rewards`,
        data: reward,
        processData: false,
        contentType: false
    })
};
