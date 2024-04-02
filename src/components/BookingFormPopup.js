import React, { useState } from 'react';
import './BookingFormPopup.css'; // Import the CSS for the popup

const BookingFormPopup = ({ hotel, onClose }) => {
  const [bookingDetails, setBookingDetails] = useState({
    roomType: hotel.rooms[0].roomType, // Default to the first room type
    guests: '1',
    rooms: '1',
    fullName: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', bookingDetails);
    // Here you would typically send the booking details to your server
    // For now, just close the popup
    onClose();
  };

  return (
    <div className="booking-form-popup-overlay">
      <div className="booking-form-popup">
        <button className="close-popup-button" onClick={onClose}>×</button>
        <h2>Reserve Your Room</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Number of Guests:</label>
            <input
              type="number"
              value={bookingDetails.guests}
              onChange={(e) => setBookingDetails({ ...bookingDetails, guests: e.target.value })}
              min="1"
            />
          </div>
          <div className="form-field">
            <label>Number of Rooms:</label>
            <input
              type="number"
              value={bookingDetails.rooms}
              onChange={(e) => setBookingDetails({ ...bookingDetails, rooms: e.target.value })}
              min="1"
            />
          </div>
          <div className="form-field">
            <label>Full Name:</label>
            <input
              type="text"
              value={bookingDetails.fullName}
              onChange={(e) => setBookingDetails({ ...bookingDetails, fullName: e.target.value })}
              required
            />
          </div>
          <div className="form-field">
            <label>Email:</label>
            <input
              type="email"
              value={bookingDetails.email}
              onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })}
              required
            />
          </div>
          <div className="form-field">
            <label>Check-In Date:</label>
            <input
              type="date"
              value={bookingDetails.checkInDate}
              onChange={(e) => setBookingDetails({ ...bookingDetails, checkInDate: e.target.value })}
              required
            />
          </div>
          <div className="form-field">
            <label>Check-Out Date:</label>
            <input
              type="date"
              value={bookingDetails.checkOutDate}
              onChange={(e) => setBookingDetails({ ...bookingDetails, checkOutDate: e.target.value })}
              required
            />
          </div>
          <div className="form-field">
            <label>Room Type:</label>
            <select
              value={bookingDetails.roomType}
              onChange={(e) => setBookingDetails({ ...bookingDetails, roomType: e.target.value })}
            >
              {hotel.rooms.map((room, index) => (
                <option key={index} value={room.roomType}>{room.roomType}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-booking-btn">Submit Reservation</button>
        </form>
      </div>
    </div>
  );
};

export default BookingFormPopup;