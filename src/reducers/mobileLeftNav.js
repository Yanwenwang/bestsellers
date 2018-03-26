import actionTypes from '../constants/actionTypes';

export const initialState = {
    isLeftNavOpen: true
};

const ACTION_HANDLERS = {
    [actionTypes.MOBILELEFTNAV.TOGGLE]: (state, action) => {
        const { isLeftNavOpen } = action.payload;

        return {
            ...state,
            isLeftNavOpen
        };
    },
    [actionTypes.ROUTER.LOCATION_CHANGE]: (state, action) => {
        return {
            ...state,
            isLeftNavOpen: false
        }
    }
};

export default function (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
};