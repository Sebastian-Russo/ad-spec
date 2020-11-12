import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './landing-page';

const title = 'Hot Melt, Pressure Sensitive & Cold Glue Manufacturer';
let wrapped = shallow(<LandingPage>{title}</LandingPage>)

describe('LandingPage Tests', () => {

  it('Renders without creashing', () => {
    shallow(<LandingPage />)
  })

  it('should render the LandingPage Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('renders the ', () => {
    expect(wrapped.find('h3').text()).toEqual(title);
  })

});