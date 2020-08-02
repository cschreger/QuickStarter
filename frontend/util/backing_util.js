export const fetchBacking = (backingId) => {
    return $.ajax({
        method: 'GET',
        url: 'api/projects'
    })
};