import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  const [hotelChains, setHotelChains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHotelChains() {
      try {
        const response = await fetch('http://localhost:8080/hotelchains/getHotelChainsAndHotels');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Now we expect the API to return an object where each key is a chain name
        // and the value is an array with chain details
        const chainsArray = Object.entries(data).map(([chainName, chainDetails]) => ({
          chainName,
          ...chainDetails[0], // We take the first (and assuming only) item from the details array
        }));

        setHotelChains(chainsArray);
      } catch (err) {
        setError(`There was a problem fetching hotel chains: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchHotelChains();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="about-us-container">
      {hotelChains.length > 0 ? (
        hotelChains.map((chain, index) => (
          <div key={index} className="hotel-chain-card">
            <h2>{chain.chainName}</h2>
            <p>Headquarters: {chain.headquarters}</p>
            <p>Contact Email: {chain.chainContactEmail}</p>
            <p>Contact Phone: {chain.chainContactPhone}</p>
            <p>Number of Hotels: {chain.chainNumberOfHotels}</p>
            <div className="hotels-list">
              <h3>Hotels:</h3>
              <ul>
                {chain.hotels.map(hotel => (
                  <li key={hotel.hotelId}>
                    {/* Link to the HotelInfo page using hotelId */}
                    <Link to={`/hotel-info/${hotel.hotelId}`}>{hotel.hotelName}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      ) : (
        <div>No hotel chains found.</div>
      )}
    </div>
  );
};

export default AboutUs;
