import React from 'react';
import { mount } from 'enzyme';
import SingleAdhesive from './single-adhesive';

describe('SingleAdhesive Tests', () => {

  it('Renders without creashing', () => {
    mount(<SingleAdhesive />)
  })

});