import actionTypes from '../constants/actionTypes';
import { fakeData } from '../constants/fakeData';
import bestSellersApi from '../utils/api/bestSellers';

export const getList = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.LIST.GET.CALL
        });

        return bestSellersApi.getBestSellers()
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

                // if there is an error just use fake data for now
                // can add error states later
                dispatch({
                    type: actionTypes.LIST.GET.SUCCESS,
                    payload: fakeData
                });
            });
   };
};

export const getFakeList = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.LIST.GET.CALL
        });
        
        const promise = Promise.resolve(fakeData);

        return promise
            .then((data) => {
                dispatch({
                    type: actionTypes.LIST.GET.SUCCESS,
                    payload: data
                });
            });
    }
};