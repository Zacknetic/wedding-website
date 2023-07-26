// HotelList.js
import React from "react";
import Hotel from "./Hotel";
import classes from "./HotelList.module.css";

const HotelList = ({ hotels, roomCodes }) => {
  // iterate through each room code and creeate a new Hotel component for each hotel, sending the hotel object and the room code as props
  //if there are fewer room codes than hotels, then do not render the remaining hotels
  //if there are more room codes than hotels, then do not render the remaining room codes
  //here is the code:
  const hotelsToShow = (
    roomCodes.length > hotels.length
      ? hotels
      : hotels.slice(0, roomCodes.length)
  ).map((hotel, index) => (
    <Hotel key={hotel.name} hotel={hotel} roomCode={roomCodes[index]} />
  ));

  return (
    <div className={classes.hotels}>
    {hotelsToShow}
</div>
  );
};

export default HotelList;
