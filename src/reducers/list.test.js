import actionTypes from '../constants/actionTypes';
import list from './list';

describe('list (reducer)', () => {
    it('initial state is correct', () => {
        // arrange
        const expectedState = {
            lists: [],
            isLoading: false
        };
        const action = {
            type: 'test'
        };

        // act
        const result = list(undefined, action);

        //assert
        expect(result).toEqual(expectedState);
    });

    it('LIST.GET.CALL action is handled correctly', () => {
        // arrange
        const expectedState = {
            lists: [],
            isLoading: true
        };
        const action = {
            type: actionTypes.LIST.GET.CALL
        };

        // act
        const result = list(undefined, action);

        // assert
        expect(result).toEqual(expectedState);
    });

    it('LIST.GET.SUCCESS action is handled correctly', () => {
        // arrange
        const fakeLists = ['hello world'];
        const action = {
            type: actionTypes.LIST.GET.SUCCESS,
            payload: {
                results: {
                    lists: fakeLists
                }
            }
        };
        const expectedState = {
            lists: fakeLists,
            isLoading: false
        };

        // act
        const result = list(undefined, action);

        // assert
        expect(result).toEqual(expectedState);
    });

    it('LIST.GET.FAIL action is handled correctly', () => {
        // arrange
        const initialState = {
            lists: [],
            isLoading: true
        };
        const action = {
            type: actionTypes.LIST.GET.FAIL
        };
        const expectedState = {
            lists: [],
            isLoading: false
        };

        // act
        const result = list(initialState, action);

        // assert
        expect(result).toEqual(expectedState);
    });
});