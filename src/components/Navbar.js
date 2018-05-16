import React, {Component} from 'react';
import EventDetails from './EventDetails.js';
import barImage from './bar-photo.jpg';
import {Route, NavLink, HashRouter} from "react-router-dom";

class NavBar extends Component {

  eventDetails() {}
  render() {
    return (
      <HashRouter>
        <div className="NavBar">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/EventDetails'>Events</NavLink>
          <div className="content">
            <Route path="/EventDetails" component={EventDetails}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default NavBar;