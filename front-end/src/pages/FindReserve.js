import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import RoomCard from '../components/RoomCard';
import FilterPopup from '../components/FilterPopup';
import { hotelChains } from '../data/hotels';
import { useSearchParams } from 'react-router-dom'; // Used to read query parameters

const FindReserve = () => {
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [searchParams] = useSearchParams(); // Hook to access search params

  // This effect updates the rooms whenever the search params change
  useEffect(() => {
    const searchDestination = searchParams.get('destination');
    const initialRooms = searchDestination
      ? // Filter rooms by the destination if provided in the search params
        hotelChains
          .flatMap(chain => chain.hotels)
          .filter(hotel => hotel.address.includes(searchDestination))
          .flatMap(hotel => hotel.rooms.map(room => ({
            ...room,
            hotelName: hotel.hotelName,
            chainName: hotel.chainName,
            address: hotel.address,
          })))
      : // Otherwise, extract all rooms
        hotelChains
          .flatMap(chain => 
            chain.hotels.flatMap(hotel => 
              hotel.rooms.map(room => ({
                ...room,
                hotelName: hotel.hotelName,
                chainName: chain.chainName,
                address: hotel.address,
              }))
            )
          );
    
    setFilteredRooms(initialRooms);
  }, [searchParams]); // Re-run the effect if search params change

  // Extract available amenities from the initial list of rooms
  const availableAmenities = Array.from(new Set(filteredRooms.flatMap(room => room.amenities)));

  const handleApplyFilters = (selectedAmenities) => {
    const filtered = filteredRooms.filter(room => 
      selectedAmenities.every(amenity => room.amenities.includes(amenity))
    );
    setFilteredRooms(filtered);
  };

  return (
    <div className="find-reserve-container">
      <SearchBar />
      <button onClick={() => setIsFilterPopupOpen(true)} className="filter-amenities-button">
        Filter Amenities
      </button>
      {isFilterPopupOpen && (
        <FilterPopup 
          onClose={() => setIsFilterPopupOpen(false)} 
          onApplyFilters={handleApplyFilters} 
          availableAmenities={availableAmenities} 
        />
      )}
      <div className="room-listing">
        {filteredRooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>
    </div>
  );
};

export default FindReserve;
