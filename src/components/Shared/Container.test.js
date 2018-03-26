import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

describe('<Container />', () => {
    it('should render children when passed in', () => {
        // arrange
        const children = <div className="unique"/>  

        // act
        const wrapper = shallow((
            <Container>
                {children}
            </Container>
        ));

        // assert
        expect(wrapper.find('.container').length).toBe(1);
        expect(wrapper.contains(children)).toBe(true);
      });
});