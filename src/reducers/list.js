import actionTypes from '../constants/actionTypes';

export const initialState = {
    list: [{
        id: '1',
        displayName: 'All'
    }, {
        id: 2,
        queryParam: 'fiction',
        displayName: 'Fiction'
    }, {
        id: 3,
        queryParam: 'non-fiction',
        displayName: 'Nonfiction'
    }]
};

const ACTION_HANDLERS = {};

export default function (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
};