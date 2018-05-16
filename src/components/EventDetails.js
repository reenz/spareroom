import React, {Component} from 'react';
import barImage from './bar-photo.jpg';

class EventDetails extends Component {
  render() {
    return (
      <div className="EventDetails" >
      <div>
        <h2>SpeedRoomMating Brooklyn @ Matte Torrey's</h2>
      </div>
      <img src={barImage} alt="barImage"/>
      </div>
    );
  }
}
export default EventDetails;