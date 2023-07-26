// Hotel.js
import React from 'react';
import Room from './Room';
import classes from './Hotel.module.css';
const Hotel = ({ hotel, roomCode }) => {
  // Filter rooms based on roomCodes

  const roomsToShow = hotel.rooms.filter(room => roomCode.includes(room.code));

  return (
    <div className={classes.hotel}>
      <h2 className={classes.hotelName}>{hotel.name}</h2>
      {roomsToShow.map(room => <Room key={room.code} room={room} />)}
    </div>
  );
}

export default Hotel;
