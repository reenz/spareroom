import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure( { adapter: new Adapter() });
import NavBar from '../../components/Navbar';


describe("NavBar",() => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it("should render 'Home' nav item", () => {  
    expect(wrapper.text()).toContain("Home");
  });

  it("should render 'Event' nav item", () => {
    expect(wrapper.text()).toContain("Events");
  });
})