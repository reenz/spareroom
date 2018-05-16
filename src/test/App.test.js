import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure( { adapter: new Adapter() });
import App from '../App';


describe("Header",() => {
  it("should render SpareRoom logo", () => {
    const wrapper = shallow(<App />) 
    expect(wrapper.find('.App-logo')).toHaveLength(1);
  })
})