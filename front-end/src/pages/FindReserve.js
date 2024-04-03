import React, { useState, useEffect } from 'react';
import RoomCard from '../components/RoomCard';
import FilterPopup from '../components/FilterPopup';
import RoomBookingPopup from '../components/RoomBookingPopup';
import './FindReserve.css';

const FindReserve = () => {
    const [rooms, setRooms] = useState([]);
    const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
    const [filters, setFilters] = useState({
        chainName: '',
        location: '',
        capacity: 0,
        minPrice: 0,
        maxPrice: 10000,
        rating: 0,
    });
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false);

    const handleBookNow = (room) => {
        console.log("Book Now clicked for room:", room);
        setSelectedRoom(room);
        setIsBookingPopupOpen(true);
    };

    const applyFilters = (newFilters) => {
        setFilters(newFilters);
        setIsFilterPopupOpen(false);
    };

    useEffect(() => {
        fetchRooms();
    }, [filters]);

    const fetchRooms = async () => {
        try {
            const response = await fetch('http://localhost:8080/findAndReserve/rooms', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(filters),
            });

            if (!response.ok) throw new Error('Failed to fetch rooms');

            const data = await response.json();
            setRooms(Object.values(data).flat());
        } catch (error) {
            console.error("Error fetching rooms:", error);
        }
    };

    return (
        <div className="find-reserve-container">
            <button onClick={() => setIsFilterPopupOpen(true)} className="filter-button">
                Filter
            </button>
            <div className="rooms-container">
                {rooms.length > 0 ? (
                    rooms.map((room, index) => (
                        <RoomCard key={index} room={room} onBookNow={handleBookNow} />
                    ))
                ) : (
                    <p>No rooms available</p>
                )}
            </div>
            {isFilterPopupOpen && (
                <FilterPopup
                    filters={filters}
                    setFilters={setFilters}
                    applyFilters={applyFilters}
                    onClose={() => setIsFilterPopupOpen(false)}
                />
            )}
            {isBookingPopupOpen && selectedRoom && (
                    console.log("hide", filters.chainName),

                <RoomBookingPopup
                    room={selectedRoom}
                    onClose={() => setIsBookingPopupOpen(false)}
                />
            )}
        </div>
    );
};

export default FindReserve;
