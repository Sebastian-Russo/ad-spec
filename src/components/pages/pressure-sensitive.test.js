import React from 'react';
import { shallow } from 'enzyme';
import PressureSensitive from './landing-page';

describe('PressureSensitive Tests', () => {

  it('Renders without creashing', () => {
    shallow(<PressureSensitive />)
  })

});