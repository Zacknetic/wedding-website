// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HotelList from './components/HotelList';
import { HOTELS } from './data/hotels';

function App() {
  const [roomCodes, setRoomCodes] = useState([]);

  // this function would be called when the user submits the form
  const handleFormSubmit = (roomSequence) => {
    const roomCodes = roomSequence.toUpperCase().split('');
    setRoomCodes(roomCodes);

    // update the URL
    window.history.pushState(null, '', `/hotels/${roomSequence}`);
  }


  useEffect(() => {
    // get the room sequence from the URL
    const urlRoomSequence = window.location.pathname.split('/')[2];
    if (urlRoomSequence) {
      const roomCodes = urlRoomSequence.toUpperCase().split('');
      setRoomCodes(roomCodes);
    }
  }, []);

  return (
    <Router>
      <div>
        <h1>Hotel List</h1>
        <Routes>
          <Route path="/hotels/:roomSequence" element={
            <HotelList hotels={HOTELS} roomCodes={roomCodes} />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
