import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()});
import EventDetails from '../../components/EventDetails.js';

const jsonData = {
  "event": {
    "areas-covered": "Brooklyn, Williamsburg, Queens, Jamaica, Astoria, Bronx, Long Island.",
    "location": {
      "name": "Matt Torrey's",
      "address": {
        "city": "Brooklyn"
      }
    }
  }
};

describe("Event Details", () => {
  let wrapper;

  it("should render 'Home' nav item", () => {
    wrapper = shallow(<EventDetails eventData={jsonData}/>);
    expect(wrapper.text()).toContain("SpeedRoomMating Brooklyn @ Matt Torrey's");
  });

  it("should render SpeedRoomMating Brooklyn @ test ", () => {
    jsonData.event.location.name = 'test';
    wrapper = shallow(<EventDetails eventData={jsonData}/>);
    expect(wrapper.text()).toContain("SpeedRoomMating Brooklyn @ test");
  });

  it("should render event details", () => {
    expect(wrapper.find('.EventDetails')).toHaveLength(1);
  })
})