import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav className="NavItems">
        <a href="#">Home</a>
        <a href="#">Events</a>
        </nav>
      </div>
    );
  }
}

export default NavBar;