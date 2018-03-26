import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';
import BookList from '../../components/BookList/BookList';

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
});