import React from 'react';
import { shallow } from 'enzyme';

import Loader from './Loader';

describe('<Loader />', () => {
    it('it renders correctly', () => {
        // arrange

        // act
        const wrapper = shallow(<Loader />);
        
        // assert
        expect(wrapper.find('.loader__container').length).toBe(1);
        expect(wrapper.find('.loader__icon').length).toBe(1);
    });
});