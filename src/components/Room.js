import React from 'react';
import classes from './Room.module.css';

const Room = ({ room }) => {
  return (
    <div className={classes.room}>
      <div className={classes.title}>{room.type} (Code: {room.code})</div>
      <div>
        <strong>Total Cost:</strong> {room.totalCost}
      </div>
      <div>
        <strong>USD Conversion:</strong> {room.usdConversion}
      </div>
      <div>
        <strong>Conversion Fees:</strong> {room.conversionFees}
      </div>
      <div>
        <strong>Total Owed:</strong> {room.totalOwed}
      </div>
      <div>
        <strong>Rooms Available:</strong> {room.roomsAvailable}
      </div>
    </div>
  );
}

export default Room;
