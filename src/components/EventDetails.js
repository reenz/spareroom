import React, {Component} from 'react';
import barImage from './bar-photo.jpg';

class EventDetails extends Component {
  render() {
    return (
      <div className="EventDetails" >
      <img src={barImage} alt="barImage"/>
      </div>
    );
  }
}
export default EventDetails;