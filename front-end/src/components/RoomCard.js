// RoomCard.js
import React, { useState } from 'react';
import RoomBookingPopup from './RoomBookingPopup'; // Make sure this component exists and is correctly imported
import './RoomCard.css'; // Ensure your CSS file is correctly linked

const RoomCard = ({ room }) => {
  const [isBookingPopupVisible, setIsBookingPopupVisible] = useState(false);

  // Toggle the visibility of the booking popup
  const toggleBookingPopup = () => {
    setIsBookingPopupVisible(!isBookingPopupVisible);
  };

  // Destructure the room data for easy access
  const { hotelName, address, price, amenities, imageUrl, rating } = room;

  return (
    <div className="room-card">
      <img src={imageUrl} alt={`Room at ${hotelName}`} className="room-card-image" />
      <div className="room-card-content">
        <h3 className="room-card-hotelName">{hotelName}</h3>
        <p className="room-card-address">{address}</p>
        <p className="room-card-price">${price} per night</p>
        <div className="room-card-amenities">
          Amenities: {amenities.join(', ')}
        </div>
        {rating && <div className="room-card-rating">Rating: {rating} stars</div>}
        <button onClick={toggleBookingPopup} className="book-now-btn">
          Book Now
        </button>
      </div>
      {isBookingPopupVisible && (
        <RoomBookingPopup room={room} onClose={toggleBookingPopup} />
      )}
    </div>
  );
};

export default RoomCard;
