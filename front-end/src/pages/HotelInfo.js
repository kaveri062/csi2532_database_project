import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import RBC from '../components/RBC'; // Ensure this is the correct path
import './HotelInfo.css';

const HotelInfo = () => {
  const { hotelId } = useParams(); // Retrieve hotelId from URL parameters
  const [hotelDetails, setHotelDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null); // Add an error state
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await fetch('http://localhost:8080/findAndReserve/roomsByHotel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // If the API requires the hotelId within a JSON payload
          body: JSON.stringify({ hotelId }), 
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        setHotelDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Ensure to set loading to false when the fetch is complete
      }
    };

    if (hotelId) fetchHotelDetails();
  }, [hotelId]);

  const handleBookNow = (room) => {
    setSelectedRoom(room);
    setShowPopup(true);
  };

  // Display loading message
  if (loading) {
    return <div>Loading hotel information...</div>;
  }

  // Display error message if any error occurred during fetching
  if (error) {
    return <div>Error fetching hotel details: {error}</div>;
  }

  // Render hotel details if data is fetched
  if (hotelDetails) {
    return (
      <div>
        <Link to="/about-us" className="back-to-results-link">← Back to Results</Link>
        <h1 className="hotel-name">{hotelDetails.hotelName}</h1>
        <p className="hotel-address">Hotel Address: {hotelDetails.hotelAddress}</p>
        <h2>Available Rooms:</h2>
        <div className="room-list">
          {hotelDetails.rooms.map((room) => (
            <div key={room.id} className="room-card">
              <h3 className="room-type">{room.type}</h3>
              <p className="room-price">${room.price} per night</p>
              <p className="room-amenities">Amenities: {room.amenities}</p>
              <p className="room-capacity">Capacity: {room.capacity}</p>
              {room.issues && <p className="issues">Issues: {room.issues}</p>}
              <button className="book-now-button" onClick={() => handleBookNow(room)}>Book Now</button>
            </div>
          ))}
        </div>

        {showPopup && selectedRoom && (
          <RBC
            room={selectedRoom}
            onClose={() => setShowPopup(false)}
          />
        )}
      </div>
    );
  }

  // If there's no loading, no error, and no data, you can assume nothing was found
  return <div>No hotel information found</div>;
};

export default HotelInfo;
