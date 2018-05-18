import React, {Component} from 'react';
import EventDetails from './EventDetails.js';

import './NavBar.css'

const displayEventDetails = props => props.eventData ? (
  <EventDetails eventData={props.eventData}/>
) : null;

const NavBar = props => (
  
    <div className="NavBar">
    <nav>
      <a href="#">Home</a>
      <a onClick={props.onClick} href=""></a>
    </nav>
      <NavLink to='/'>Home</NavLink>
      <span>  </span>
      <NavLink to='/EventDetails'>Events</NavLink>
      <div className="content">
        {displayEventDetails(props)}
      </div>
    </div>
);

export default NavBar;