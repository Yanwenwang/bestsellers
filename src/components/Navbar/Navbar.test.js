import React from 'react';
import { shallow } from 'enzyme';

import Navbar from './Navbar';

describe('<Navbar />', () => {
    it('it renders correctly', () => {
        // arrange
        const props = {
            toggleLeftNav: jest.fn()
        }

        // act
        const wrapper = shallow(<Navbar {...props} />);
        wrapper.find('.nav__hamburger').simulate('click');
        
        // assert
        expect(props.toggleLeftNav.mock.calls.length).toBe(1);

        expect(wrapper.find('.nav__outer-container').length).toBe(1);
        expect(wrapper.find('.nav__container').length).toBe(1);
        expect(wrapper.find('.nav__hamburger').length).toBe(1);

        expect(wrapper.find('.nav__title').length).toBe(1);
        expect(wrapper.find('.nav__title').text()).toBe('The New York Times Bestsellers');
    });
});