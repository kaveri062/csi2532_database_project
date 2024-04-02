import React, { useState } from 'react';
import './RoomBookingPopup.css'; // Ensure your CSS file is correctly linked

const RoomBookingPopup = ({ room, onClose }) => {
  const [bookingDetails, setBookingDetails] = useState({
    hotelChain: room.chainName,
    hotelLocation: room.address,
    roomsAndGuests: '1 Room, 2 Guests',
    fullName: '',
    email: '',
    // Include initial values for any other fields
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingDetails({
      ...bookingDetails,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your booking processing logic here
    console.log('Booking Details:', bookingDetails);
    onClose(); // This should close the popup
  };

  return (
    <div className="room-booking-popup-overlay">
      <div className="room-booking-popup">
        <button onClick={onClose} className="close-popup-button">×</button>
        <h2>Book your room</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          {/* Render form inputs here */}
          {/* Example: Full Name Input */}
          <div className="form-field">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={bookingDetails.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Example: Email Input */}
          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={bookingDetails.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          {/* Repeat for other inputs */}
          <button type="submit" className="submit-booking-btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoomBookingPopup;
