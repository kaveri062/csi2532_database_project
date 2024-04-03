import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RBC from '../components/RBC'; // Update import to the correct path of your RBC component

const HotelInfo = ({ hotelName }) => {
  const [hotelDetails, setHotelDetails] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await fetch('http://localhost:8080/hotelchains/getHotelChainsAndHotels');
        if (!response.ok) throw new Error('Failed to fetch hotel details');

        const data = await response.json();
        let foundHotel = null;

        Object.values(data).forEach(chains => {
          chains.forEach(chain => {
            const hotel = chain.hotels.find(h => h.name === hotelName);
            if (hotel) {
              foundHotel = { ...hotel, chainName: chain.chainName };
            }
          });
        });

        if (!foundHotel) throw new Error('Hotel not found');
        setHotelDetails(foundHotel);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchHotelDetails();
  }, [hotelName]);

  const handleBookNow = (room) => {
    setSelectedRoom(room);
    setShowPopup(true);
  };

  if (!hotelDetails) {
    return <div>Loading hotel information...</div>;
  }

  return (
    <div>
      <Link to="/about-us" className="back-to-results-link">← Back to Results</Link>
      <h1>{hotelDetails.name} - {hotelDetails.chainName}</h1>
      <button onClick={() => handleBookNow(hotelDetails)}>Book a Room</button>
      {showPopup && (
        <RBC
          room={selectedRoom}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default HotelInfo;
