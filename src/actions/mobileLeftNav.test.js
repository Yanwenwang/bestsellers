import { toggleLeftNav } from './mobileLeftNav';
import actionTypes from '../constants/actionTypes';

describe('mobileLeftNav (action)', () => {

    describe('toggleLeftNav', () => {
        it('should dispatch correct action when isLeftNavOpen is true', () => {
            // arrange
            const fakeGetState = {
                mobileLeftNav: {
                    isLeftNavOpen: true
                }
            };
            const mockDispatch = jest.fn();
            const mockGetState = jest.fn();
            mockGetState.mockReturnValueOnce(fakeGetState)

            // act
            toggleLeftNav()(mockDispatch, mockGetState);

            // assert
            expect(mockDispatch.mock.calls.length).toBe(1);

            expect(mockDispatch.mock.calls[0][0]).toEqual({
                type: actionTypes.MOBILELEFTNAV.TOGGLE,
                payload: {
                    isLeftNavOpen: false
                }
            });
        });

        it('should dispatch correct action when isLeftNavOpen is false', () => {
            // arrange
            const fakeGetState = {
                mobileLeftNav: {
                    isLeftNavOpen: false
                }
            };
            const mockDispatch = jest.fn();
            const mockGetState = jest.fn();
            mockGetState.mockReturnValueOnce(fakeGetState)

            // act
            toggleLeftNav()(mockDispatch, mockGetState);

            // assert
            expect(mockDispatch.mock.calls.length).toBe(1);

            expect(mockDispatch.mock.calls[0][0]).toEqual({
                type: actionTypes.MOBILELEFTNAV.TOGGLE,
                payload: {
                    isLeftNavOpen: true
                }
            });
        });
    });
});