export const fetchBackings = (backings) => {
    return $.ajax({
        method: 'GET',
        url: `api/backings`
    })
};

export const createBacking = (backing) => {
    return $.ajax({
        method: 'POST',
        url: `api/backings`,
        data: {backing}
    })
};

// remove {} from backing due to way data is being passed in?