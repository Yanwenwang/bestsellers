import React from 'react';
import { shallow, mount } from 'enzyme';

import { Link } from 'react-router-dom';
import LeftNav from './LeftNav';
import { MemoryRouter } from 'react-router';

describe('<LeftNav />', () => {
    it('it renders correctly', () => {
        // arrange
        const props = {
            isLeftNavOpen: false,
            filters: [{
                id: '1',
                url: 'url1',
                displayName: 'displayName1'
            }, {
                id: '2',
                url: 'url2',
                displayName: 'displayName2'
            }, {
                id: '3',
                url: 'url3',
                displayName: 'displayName3'
            }],
            toggleLeftNav: jest.fn()
        };

        // act
        const wrapper = mount((
            <MemoryRouter>
                <LeftNav {...props} />
            </MemoryRouter>
        ));
        wrapper.find('.left-nav__close').simulate('click');
        
        // assert
        expect(wrapper.find('.left-nav__wrapper').length).toBe(1);
        expect(wrapper.find('.left-nav__container').length).toBe(1);

        expect(wrapper.find('.left-nav__title').length).toBe(1);
        expect(wrapper.find('.left-nav__title').text()).toBe('Bestsellers');

        expect(wrapper.find('.left-nav__close').length).toBe(1);

        expect(wrapper.find(Link).length).toBe(3);
        expect(props.toggleLeftNav.mock.calls.length).toBe(1);
    });

    it('it renders correct class when isLeftNavOpen is false', () => {
        // arrange
        const props = {
            isLeftNavOpen: false,
            filters: [],
            toggleLeftNav: jest.fn()
        };

        // act
        const wrapper = shallow(<LeftNav {...props} />);

        // assert
        expect(wrapper.find('.left-nav__container.left-nav__container--open').length).toBe(0);
    });

    it('it renders correct class when isLeftNavOpen is true', () => {
        // arrange
        const props = {
            isLeftNavOpen: true,
            filters: [],
            toggleLeftNav: jest.fn()
        };

        // act
        const wrapper = shallow(<LeftNav {...props} />);

        // assert
        expect(wrapper.find('.left-nav__container.left-nav__container--open').length).toBe(1);
    });
});