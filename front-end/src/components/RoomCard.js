import React from 'react';
import './RoomCard.css';

const RoomCard = ({ room, onBookNow }) => {
    return (
        <div className="room-card">
            <h3>{room.hotelName}</h3>
            <div className="room-detail">{room.address}</div>
            <div className="room-rating">Rating: {room.rating} ★</div>
            <div className="room-price">Price: ${room.price}</div>
            <div className="room-amenities">Amenities: {room.amenities}</div>
            <button onClick={() => onBookNow(room)}>Book Now</button>
        </div>
    );
};

export default RoomCard;
