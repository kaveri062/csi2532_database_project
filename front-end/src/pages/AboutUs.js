import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  const [hotelChains, setHotelChains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotelChains = async () => {
      try {
        const response = await fetch('http://localhost:8080/hotelchains/getHotelChainsAndHotels');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Transform the object into an array of hotel chain objects
        const chainsArray = Object.entries(data).map(([chainName, details]) => {
          // Assuming each key has a single hotel chain object in an array
          const chainDetails = details[0];
          return {
            chainName: chainDetails.chainName,
            headquartersAddress: chainDetails.headquarters,
            contactEmail: chainDetails.chainContactEmail,
            contactPhone: chainDetails.chainContactPhone,
            numberOfHotels: chainDetails.chainNumberOfHotels,
            hotels: chainDetails.hotels,
          };
        });
        setHotelChains(chainsArray);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelChains();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching hotel chains: {error}</div>;

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
                  <Link to={`/hotels/${encodeURIComponent(hotel)}`}>{hotel}</Link>
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
