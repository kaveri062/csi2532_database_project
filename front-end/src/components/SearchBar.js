// SearchBar.js
import React, { useState } from 'react';
import RoomGuestsPopup from './RoomGuestsPopup'; // Import your RoomGuestsPopup component
import './SearchBar.css'; // Ensure you have the CSS file

const SearchBar = () => {
  // States for each of the search inputs
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  // State for the RoomGuestsPopup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // Function to toggle the RoomGuestsPopup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Your search handling function
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(destination, checkIn, checkOut);
  };

  return (
    <div className="search-bar-wrapper">
      <form className="search-bar" onSubmit={handleSearch}>
        <div className="input-group">
          <label htmlFor="destination" className="input-label">Enter a destination</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="New York, NY"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="check-in" className="input-label">Check-in date</label>
          <input
            type="date"
            id="check-in"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="check-out" className="input-label">Check-out date</label>
          <input
            type="date"
            id="check-out"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="input-field"
          />
        </div>
        <button type="button" onClick={togglePopup} className="rooms-guests-btn">
          Rooms and Guests
        </button>
        <button type="submit" className="search-button">Find a Hotel</button>
      </form>
      {isPopupOpen && <RoomGuestsPopup togglePopup={togglePopup} />}
    </div>
  );
};

export default SearchBar;
