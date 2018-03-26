import actionTypes from '../constants/actionTypes';

export const toggleLeftNav = () => {
    return (dispatch, getState) => {
        
        const { isLeftNavOpen } = getState().mobileLeftNav;
        
        dispatch({
            type: actionTypes.MOBILELEFTNAV.TOGGLE,
            payload: {
                isLeftNavOpen: !isLeftNavOpen
            }
        });
    }
};