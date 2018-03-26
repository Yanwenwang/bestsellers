import React from 'react';
import { shallow } from 'enzyme';

import Book from './Book';

describe('<Book />', () => {
    it('it renders correctly', () => {
        // arrange
        const props = {
            imageSrc: 'imageSrc',
            imageAlt: 'imageAlt',
            author: 'author',
            rank: '1',
            title: 'title',
            description: 'description'
        };

        // act
        const wrapper = shallow(<Book {...props} />);
        
        // assert
        expect(wrapper.find('.book__rank').length).toBe(1);
        expect(wrapper.find('.book__rank').text()).toBe(props.rank);

        expect(wrapper.find('.book__image').length).toBe(1);
        expect(wrapper.find('.book__image').props().src).toBe(props.imageSrc);
        expect(wrapper.find('.book__image').props().alt).toBe(props.imageAlt);

        expect(wrapper.find('.book__title').length).toBe(1);
        expect(wrapper.find('.book__title').text()).toBe(props.title);

        expect(wrapper.find('.book__author').length).toBe(1);
        expect(wrapper.find('.book__author').text()).toBe(props.author);

        expect(wrapper.find('.book__description').length).toBe(1);
        expect(wrapper.find('.book__description').text()).toBe(props.description);
    });

    it('it does not render description when there is none', () => {
        // arrange
        const props = {
            imageSrc: 'imageSrc',
            imageAlt: 'imageAlt',
            author: 'author',
            rank: '1',
            title: 'title'
        };

        // act
        const wrapper = shallow(<Book {...props} />);
        
        // assert
        expect(wrapper.find('.book__description').length).toBe(0);
    });
});