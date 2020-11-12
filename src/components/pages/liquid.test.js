import React from 'react';
import { shallow } from 'enzyme';
import Liquid from './liquid';

describe('Liquid Tests', () => {

  it('Renders without crashing', () => {
    shallow(<Liquid />)
  });

})
