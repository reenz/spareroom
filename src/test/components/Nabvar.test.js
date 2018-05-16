import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure( { adapter: new Adapter() });
import NavBar from '../../components/Navbar';


describe("NavBar",() => {
  it("should render nav items", () => {
    const wrapper = shallow(<NavBar />) 
    expect(wrapper.text()).toContain("Home");
  })
})