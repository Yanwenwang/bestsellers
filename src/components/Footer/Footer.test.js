import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Footer />', () => {
    it('it renders correctly', () => {
        // arrange

        // act
        const wrapper = shallow(<Footer />);
        
        // assert
        expect(wrapper.find('.footer__text').length).toBe(1);
        expect(wrapper.find('.footer__icon').length).toBe(1);
        expect(wrapper.find('.footer__text').text()).toBe('Made with  by Yanwen');
    });
});