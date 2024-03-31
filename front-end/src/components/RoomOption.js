import React from 'react';

const RoomOption = ({ name, price, amenities }) => {
  // Render the room option based on the props
  return (
    <div className="room-option">
      <h5>{name}</h5>
      <p>Price: {price}</p>
      {/* Render amenities and other room details */}
    </div>
  );
};

export default RoomOption;
