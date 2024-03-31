import React from 'react';
import './HotelCard.css'; // Link to your CSS file for styling

const HotelCard = ({ name, location, price, stars, imageUrl }) => {
  return (
    <div className="hotel-card">
      <div className="hotel-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        {/* Image is set via CSS background-image */}
      </div>
      <div className="hotel-info">
        <h3>{name}</h3>
        <p className="hotel-location">{location}</p>
        <p className="hotel-price">{price} per night</p>
        <p className="hotel-stars">{'\u2605'.repeat(stars)}</p> {/* Assuming 5 stars max */}
      </div>
    </div>
  );
};

export default HotelCard;
