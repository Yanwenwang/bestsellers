import { getList, getFakeList } from './list'
import actionTypes from '../constants/actionTypes';
import { fakeData } from '../constants/fakeData';
import bestSellersApi from '../utils/api/bestSellers';


describe('list', () => {
    
    describe('getList', () => {
        it('should dispatch correct actions on API call success', async () => {
            // arrange
            const fakeData = 'hello world';
            const fakeResponse = {
                json: () => fakeData
            };
            const promise = Promise.resolve(fakeResponse);
            const mockDispatch = jest.fn();

            bestSellersApi.getBestSellers = jest.fn();
            bestSellersApi.getBestSellers.mockReturnValueOnce(promise)

            // act
            await getList()(mockDispatch);

            // assert
            expect(mockDispatch.mock.calls.length).toBe(2);

            expect(mockDispatch.mock.calls[0][0]).toEqual({
                type: actionTypes.LIST.GET.CALL
            });

            expect(mockDispatch.mock.calls[1][0]).toEqual({
                type: actionTypes.LIST.GET.SUCCESS,
                payload: fakeData
            });
        });

        it('should dispatch action of type LIST.GET.FAIL on API call error', async () => {
            // arrange
            const fakeError = 'hello world';
            const promise = Promise.reject(fakeError);
            const mockDispatch = jest.fn();

            bestSellersApi.getBestSellers = jest.fn();
            bestSellersApi.getBestSellers.mockReturnValueOnce(promise)

            // act
            await getList()(mockDispatch);

            // assert
            expect(mockDispatch.mock.calls.length).toBe(2);

            expect(mockDispatch.mock.calls[0][0]).toEqual({
                type: actionTypes.LIST.GET.CALL
            });

            expect(mockDispatch.mock.calls[1][0]).toEqual({
                type: actionTypes.LIST.GET.FAIL,
                payload: fakeError
            });
        });
    });

    describe('getFakeList', () => {
        it('should dispatch correct actions', async () => {
            // arrange
            const mockDispatch = jest.fn();

            // act
            await getFakeList()(mockDispatch);

            // assert
            expect(mockDispatch.mock.calls.length).toBe(1);

            expect(mockDispatch.mock.calls[0][0]).toEqual({
                type: actionTypes.LIST.GET.SUCCESS,
                payload: fakeData
            })
        });
    });
});