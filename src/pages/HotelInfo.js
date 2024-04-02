import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { hotelChains } from '../data/hotels';
import BookingFormPopup from '../components/BookingFormPopup'; // Adjust path as needed
import './HotelInfo.css'; // Make sure the CSS file path is correct

const HotelInfo = () => {
  const { hotelName } = useParams();
  const [showBookingForm, setShowBookingForm] = useState(false);
  
  let hotel = null;
  let chainName = '';
  for (const chain of hotelChains) {
    hotel = chain.hotels.find(h => h.hotelName === hotelName);
    if (hotel) {
      chainName = chain.chainName;
      break;
    }
  }

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className="hotel-info-container">
      <button onClick={() => window.history.back()}>← Back to results</button>
      <div className="hotel-images">
        <img src={hotel.rooms[0].imageUrl} alt={`${hotel.hotelName}`} />
      </div>
      <h1>{`${hotel.hotelName} by ${chainName}`}</h1>
      <div className="hotel-rating">
        {'★'.repeat(hotel.rating) + '☆'.repeat(5 - hotel.rating)}
      </div>
      <p className="hotel-description">This is a short description of the hotel...</p>
      <div className="hotel-amenities">
        <h3>Amenities:</h3>
        <ul>
          {hotel.rooms[0].amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
      <p className="hotel-address">{hotel.address}</p>
      <div className="hotel-map">View in a map</div>
      <button className="reserve-room-btn" onClick={() => setShowBookingForm(true)}>
        Reserve a Room
      </button>

      {showBookingForm && (
        <BookingFormPopup 
          hotel={hotel} 
          onClose={() => setShowBookingForm(false)} 
        />
      )}
    </div>
  );
};

export default HotelInfo;