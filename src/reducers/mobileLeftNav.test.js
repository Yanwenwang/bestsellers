import actionTypes from '../constants/actionTypes';
import mobileLeftNav from './mobileLeftNav';

describe('mobileLeftNav (reducer)', () => {
    it('initial state is correct', () => {
        // arrange
        const expectedState = {
            isLeftNavOpen: true
        };
        const action = {
            type: 'test'
        };

        // act
        const result = mobileLeftNav(undefined, action);

        //assert
        expect(result).toEqual(expectedState);
    });

    it('MOBILELEFTNAV.TOGGLE action is handled correctly', () => {
        // arrange
        const initialState = {
            isLeftNavOpen: true
        };
        const expectedState = {
            isLeftNavOpen: false
        };
        const action = {
            type: actionTypes.MOBILELEFTNAV.TOGGLE,
            payload: {
                isLeftNavOpen: false
            }
        };

        // act
        const result = mobileLeftNav(initialState, action);

        // assert
        expect(result).toEqual(expectedState);
    });

     it('ROUTER.LOCATION_CHANGE action is handled correctly', () => {
        // arrange
        const expectedState = {
            isLeftNavOpen: false
        };
        const action = {
            type: actionTypes.ROUTER.LOCATION_CHANGE
        };

        // act
        const result = mobileLeftNav(undefined, action);

        // assert
        expect(result).toEqual(expectedState);
    });
});