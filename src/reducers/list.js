import actionTypes from '../constants/actionTypes';

export const initialState = {
    lists: [],
    isLoading: false
};

const ACTION_HANDLERS = {
    [actionTypes.LIST.GET.CALL]: (state, action) => {
        return {
            ...state,
            isLoading: true
        };
    },
    [actionTypes.LIST.GET.SUCCESS]: (state, action) => {
        const { lists } = action.payload.results;

        return {
            ...state,
            lists,
            isLoading: false
        };
    },
    [actionTypes.LIST.GET.FAIL]: (state, action) => {
        return {
            ...state,
            isLoading: false
        }
    }
};

export default function (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
};