// RoomGuestsPopup.js
import React, { useState } from 'react';
import './RoomGuestsPopup.css'; // Make sure the CSS file is linked correctly

const RoomGuestsPopup = ({ togglePopup }) => {
  const [rooms, setRooms] = useState([{ adults: 2, kids: 0 }]);

  const handleAdultsChange = (roomIndex, delta) => {
    setRooms(currentRooms =>
      currentRooms.map((room, index) =>
        index === roomIndex
          ? { ...room, adults: Math.max(1, room.adults + delta) }
          : room
      )
    );
  };

  const handleKidsChange = (roomIndex, delta) => {
    setRooms(currentRooms =>
      currentRooms.map((room, index) =>
        index === roomIndex
          ? { ...room, kids: Math.max(0, room.kids + delta) }
          : room
      )
    );
  };

  const handleAddRoom = () => {
    setRooms(currentRooms => [...currentRooms, { adults: 1, kids: 0 }]);
  };

  const handleRemoveRoom = (roomIndex) => {
    setRooms(currentRooms => currentRooms.filter((_, index) => index !== roomIndex));
  };

  return (
    <div className="room-guests-popup-overlay">
      <div className="room-guests-popup">
        <div className="popup-header">
          <h2>Rooms and Guests</h2>
          <button onClick={togglePopup} className="close-button">×</button>
        </div>
        {rooms.map((room, index) => (
          <div key={index} className="room-container">
            <div className="room-info">
              <div className="room-title">Room {index + 1}</div>
              {rooms.length > 1 && (
                <button onClick={() => handleRemoveRoom(index)} className="remove-room-button">Remove</button>
              )}
            </div>
            <div className="guests-count">
              <div className="count-control">
                <label>Adults</label>
                <button onClick={() => handleAdultsChange(index, -1)}>-</button>
                <span>{room.adults}</span>
                <button onClick={() => handleAdultsChange(index, 1)}>+</button>
              </div>
              <div className="count-control">
                <label>Kids</label>
                <button onClick={() => handleKidsChange(index, -1)}>-</button>
                <span>{room.kids}</span>
                <button onClick={() => handleKidsChange(index, 1)}>+</button>
              </div>
            </div>
          </div>
        ))}
        <button onClick={handleAddRoom} className="add-room-button">+ Add Room</button>
        <div className="popup-actions">
          <button onClick={togglePopup} className="cancel-button">Cancel</button>
          <button onClick={togglePopup} className="done-button">Done</button>
        </div>
      </div>
    </div>
  );
};

export default RoomGuestsPopup;
