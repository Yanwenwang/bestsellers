import actionTypes from '../constants/actionTypes';
import { fakeData } from '../constants/fakeData';
import bestSellersApi from '../utils/api/bestSellers';

export const getList = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.LIST.GET.CALL
        });

        bestSellersApi.getBestSellers()
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                dispatch({
                    type: actionTypes.LIST.GET.SUCCESS,
                    payload: response
                });
            })
           .catch((error) => {
                dispatch({
                    type: actionTypes.LIST.GET.FAIL,
                    payload: error
                });    
            });
   };
}

export const getFakeList = () => {
    return (dispatch) => {
        const promise = Promise.resolve(fakeData);

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
            });
    }
};