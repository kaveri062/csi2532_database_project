import React, { useState, useEffect } from 'react';
import './EditHotels.css';

const EditHotels = () => {
  const [hotelChains, setHotelChains] = useState([]);
  const [selectedChain, setSelectedChain] = useState('');
  const [selectedHotel, setSelectedHotel] = useState('');
  const [hotelInfo, setHotelInfo] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedHotelInfo, setEditedHotelInfo] = useState(null);

  useEffect(() => {
    const fetchHotelChains = async () => {
      try {
        const response = await fetch('http://localhost:8080/hotelchains/getHotelChainsAndHotels');
        const data = await response.json();
        const chainsArray = Object.entries(data).map(([chainName, details]) => ({
          chainName,
          hotels: details[0].hotels // Assuming that the first item in the array has hotel data
        }));
        setHotelChains(chainsArray);
      } catch (error) {
        console.error('Error fetching hotel chains:', error);
      }
    };

    fetchHotelChains();
  }, []);

  const handleChainSelection = (event) => {
    setSelectedChain(event.target.value);
    setSelectedHotel('');
    setHotelInfo(null);
  };

  const handleHotelSelection = (event) => {
    setSelectedHotel(event.target.value);
  };

  const handleFindHotel = async () => {
    // Placeholder logic for fetching hotel info based on selected hotel
    // In a real scenario, replace this with an actual API call
    if (selectedChain && selectedHotel) {
      const hotel = hotelChains
        .find(chain => chain.chainName === selectedChain)
        ?.hotels.find(h => h === selectedHotel);
      if (hotel) {
        // Simulated API response
        const fakeApiResponse = {
          name: selectedHotel,
          location: '123 New York Street, NY',
          totalRooms: 80,
          roomInfo: {
            single: { number: 10, price: 150 },
            double: { number: 40, price: 215 },
            triple: { number: 20, price: 260 },
            quad: { number: 10, price: 300 }
          }
        };
        setHotelInfo(fakeApiResponse);
      }
    }
  };

  const toggleEditMode = () => {
    if (editMode) {
      setEditedHotelInfo(null);
    } else {
      setEditedHotelInfo({ ...hotelInfo });
    }
    setEditMode(!editMode);
  };

  const handleEditChange = (type, value) => {
    setEditedHotelInfo({ ...editedHotelInfo, [type]: value });
  };

  const handleSave = async () => {
    // API call to save the edited hotel information
    console.log('Saving data', editedHotelInfo);
    toggleEditMode();
    // After saving to the database, you would typically refresh the data:
    // setHotelInfo(editedHotelInfo);
    // setEditedHotelInfo(null);
  };

  const handleDelete = async () => {
    // API call to delete the hotel
    console.log('Deleting hotel', selectedHotel);
    // After deleting from the database, you would typically clear the state:
    // setHotelInfo(null);
    // setSelectedHotel('');
  };

  return (
    <div className="edit-hotels-container">
      <h1>Edit Hotels</h1>
      <div className="selectors">
        <select value={selectedChain} onChange={handleChainSelection}>
          <option value="">Select a Hotel Chain</option>
          {hotelChains.map((chain, index) => (
            <option key={index} value={chain.chainName}>{chain.chainName}</option>
          ))}
        </select>
        <select value={selectedHotel} onChange={handleHotelSelection} disabled={!selectedChain}>
          <option value="">Select a Hotel</option>
          {selectedChain && hotelChains.find(chain => chain.chainName === selectedChain)?.hotels.map((hotel, index) => (
            <option key={index} value={hotel}>{hotel}</option>
          ))}
        </select>
        <button onClick={handleFindHotel} className="find-hotel-button">Find Hotel</button>
      </div>

      {hotelInfo && !editMode && (
        <div className="hotel-info">
          <h2>{hotelInfo.name}</h2>
          <p>{hotelInfo.location}</p>
          <p>Total number of rooms: {hotelInfo.totalRooms}</p>
          {/* ... More code for displaying room details ... */}
          <button onClick={toggleEditMode} className="edit-button">Edit</button>
          <button onClick={handleDelete} className="delete-button">Delete</button>
        </div>
      )}

      {editMode && (
        <div className="edit-hotel-info">
          <input type="text" value={editedHotelInfo.name} onChange={(e) => handleEditChange('name', e.target.value)} />
          {/* ... More code for editable inputs ... */}
          <button onClick={toggleEditMode} className="cancel-button">Cancel</button>
          <button onClick={handleSave} className="save-button">Save</button>
        </div>
      )}
    </div>
  );
};

export default EditHotels;
