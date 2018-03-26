import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';
import BookList from '../../components/BookList/BookList';
import { Loader } from '../Shared';

describe('<Home />', () => {
    it('it renders correctly', () => {
        // arrange
        const mockGetList = jest.fn();
        const props = {
            getList: mockGetList,
            lists: [ 
                { displayName: '', books: [] },
                { displayName: '', books: [] },
                { displayName: '', books: [] }
            ]
        };

        // act
        const wrapper = shallow(<Home {...props} />);

        // assert
        expect(mockGetList.mock.calls.length).toBe(1);

        expect(wrapper.find('.home__container').length).toBe(1);
        expect(wrapper.find(BookList).length).toBe(3);
    });

    it('it shows loader correctly', () => {
        // arrange
        const mockGetList = jest.fn();
        const props = {
            getList: mockGetList,
            lists: [],
            isLoading: true
        };

        // act
        const wrapper = shallow(<Home {...props} />);

        // assert
        expect(wrapper.find(Loader).length).toBe(1);
    });
});