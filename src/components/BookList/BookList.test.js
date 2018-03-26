import React from 'react';
import { shallow } from 'enzyme';

import Book from '../../components/Book/Book';
import BookList from './BookList';

describe('<BookList />', () => {
    it('it renders correctly', () => {
        // arrange
        const props = {
            title: 'title',
            books: [ {}, {}, {} ]
        };

        // act
        const wrapper = shallow(<BookList {...props} />);
        
        // assert
        expect(wrapper.find('.book-list__title').length).toBe(1);
        expect(wrapper.find('.book-list__title').text()).toBe(props.title);

        expect(wrapper.find(Book).length).toBe(3);
    });
});