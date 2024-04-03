import React, { useState, useEffect } from 'react';
import './BookingFormPopup.css'; // Ensure the CSS file path is correct

const BookingFormPopup = ({ hotel, onClose }) => {
  // Initialize bookingDetails with empty or default values
  const [bookingDetails, setBookingDetails] = useState({
    roomType: '',
    guests: '1',
    rooms: '1',
    fullName: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
  });

  // Update bookingDetails once hotel data is confirmed to be loaded
  useEffect(() => {
    // Defensive programming to ensure hotel and its rooms are loaded
    if (hotel && hotel.rooms && hotel.rooms.length > 0) {
      setBookingDetails(prevDetails => ({
        ...prevDetails,
        // Set the default roomType using the first room's type
        roomType: hotel.rooms[0].roomType,
      }));
    }
  }, [hotel]); // Depend on the hotel prop to trigger this effect

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', bookingDetails);
    // Placeholder for submission logic
    onClose(); // Close the popup, assuming onClose is a function prop to hide the popup
  };

  // Show loading message if hotel or rooms data is not yet available
  if (!hotel || !hotel.rooms || hotel.rooms.length === 0) {
    return <div>Loading room details...</div>;
  }

  // Render the booking form once data is available
  return (
    <div className="booking-form-popup-overlay">
      <div className="booking-form-popup">
        <button className="close-popup-button" onClick={onClose}>×</button>
        <h2>Reserve Your Room at {hotel.name}</h2>
        <form onSubmit={handleSubmit}>
          {/* Inputs for guest and room number, full name, and email remain unchanged */}
          <div className="form-field">
            <label>Room Type:</label>
            <select
              value={bookingDetails.roomType}
              onChange={(e) => setBookingDetails({ ...bookingDetails, roomType: e.target.value })}
              required>
              {hotel.rooms.map((room, index) => (
                <option key={index} value={room.roomType}>{room.roomType}</option>
              ))}
            </select>
          </div>
          {/* Continue with other form fields */}
          <button type="submit" className="submit-booking-btn">Submit Reservation</button>
        </form>
      </div>
    </div>
  );
};

export default BookingFormPopup;
