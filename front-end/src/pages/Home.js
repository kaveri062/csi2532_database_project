import React from 'react';
import './Home.css'; 
import SearchBar from '../components/SearchBar';
import HotelCard from '../components/HotelCard';

const Home = () => {
  const hotelData = [
    {
      name: "North Star Seaside Resort",
      location: "Atlantic City, NJ",
      price: "$450",
      stars: 5,
      imageUrl: "https://www.miamiandbeaches.com/getmedia/63620274-056c-45c3-b384-5f8d6139cf79/1hotel-south-beach-balcony-1440x900.jpg"
    },
    {
      name: 'Lakeside Tahoe Vista',
      location: 'Lake Tahoe, California',
      price: '$275',
      stars: 4,
      imageUrl: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/96/e4/e09d49a30b95de8e154b0bd61b66fa5612306e5e4b1b0de07674c0a74ed2.jpeg' // Replace with actual image path
    },
    {
      name: 'North Star City Center',
      location: 'Denver, CO',
      price: '$350',
      stars: 4,
      imageUrl: 'https://symphony.cdn.tambourine.com/hotel-indigo-denver-redesign/media/indigodenver-homepage-hero-5fe11061c4f66.jpg'
    
    }
    // ... Add more hotel data objects based on the information you have
  ];

  return (
    <div className="home">
      <div className="parallax-section">
        <SearchBar />
      </div>
      <section className="luxury-hotels-showcase">
        <h2>Explore our most luxurious stays</h2>
        <div className="hotel-cards-container">
          {hotelData.map(hotel => (
            <HotelCard
              key={hotel.name}
              name={hotel.name}
              location={hotel.location}
              price={hotel.price}
              stars={hotel.stars}
              imageUrl={hotel.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
