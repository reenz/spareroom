import React, {Component} from 'react';
import barImage from './bar-photo.jpg';

const EventDetails = props => (
  <div className="EventDetails">
    <div>
      <h2>SpeedRoomMating Brooklyn @ {props.eventData.event.location.name}</h2>
    </div>
    <img src={barImage} alt="barImage"/>
  </div>
);

export default EventDetails;