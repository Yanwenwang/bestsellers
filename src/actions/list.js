import actionTypes from '../constants/actionTypes';
import { fakeData } from '../constants/fakeData';

export const getList = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.LIST.GET.CALL
        });  

        const promise = Promise.resolve(fakeData)

        promise
            .then((data) => {
                dispatch({
                    type: actionTypes.LIST.GET.SUCCESS,
                    payload: data
                });  
            })
            .catch((error) => {
                dispatch({
                    type: actionTypes.LIST.GET.FAIL,
                    payload: error
                });    
            })
    }
};