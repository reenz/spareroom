import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure( { adapter: new Adapter() });
import EventDetails from '../../components/EventDetails.js';


describe("Event Details",() => {
  it("should render event details", () => {
    const wrapper = shallow(<EventDetails />) 
    expect(wrapper.find('.EventDetails')).toHaveLength(1);
  })
})