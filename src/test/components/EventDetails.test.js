import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure( { adapter: new Adapter() });
import EventDetails from '../../components/EventDetails.js';


describe("Event Details",() => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EventDetails />) ;
  });

  it("should render 'Home' nav item", () => {  
    expect(wrapper.text()).toContain("SpeedRoomMating Brooklyn @ Matte Torrey's");
  });

  it("should render event details", () => {
    expect(wrapper.find('.EventDetails')).toHaveLength(1);
  })
})