import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './navbar';

describe('Navbar Tests', () => {

  it('Renders without creashing', () => {
    shallow(<Navbar />)
  })

});