import React from 'react';
import { hotelChains } from '../data/hotels';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {hotelChains.map((chain, index) => (
        <div key={index} className="hotel-chain-card">
          <h2>{chain.chainName}</h2>
          <p>Headquarters: {chain.headquartersAddress}</p>
          <p>Contact Email: {chain.contactEmail}</p>
          <p>Contact Phone: {chain.contactPhone}</p>
          <p>Number of Hotels: {chain.numberOfHotels}</p>
          <div className="hotels-list">
            <h3>Hotels:</h3>
            <ul>
              {chain.hotels.map((hotel, hotelIndex) => (
                <li key={hotelIndex}>
                  {/* Link to the hotel's page using React Router's Link component */}
                  <Link to={`/hotels/${hotel.hotelName}`}>{hotel.hotelName}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;