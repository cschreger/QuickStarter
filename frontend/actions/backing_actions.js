import * as BackingUtil from '../util/backing_util';

export const RECEIVE_PROJECT_BACKINGS = "RECEIVE_PROJECT_BACKINGS";
export const RECEIVE_BACKING = "RECEIVE_BACKING";

const receiveProjectBackings = backings => ({
    type: RECEIVE_PROJECT_BACKINGS,
    backings
});

const receiveBacking = backing => ({
    type: RECEIVE_BACKING,
    backing
});

export const fetchProjectBackings = () => dispatch => (
    BackingUtil.fetchBackings()
        .then(backings => dispatch(receiveProjectBackings(backings)))
);

export const createBacking = backing => dispatch => (
    BackingUtil.createBacking(backing)
        .then(backing => dispatch(receiveBacking(backing)))
);