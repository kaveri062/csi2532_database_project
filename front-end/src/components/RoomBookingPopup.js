import React, { useState, useEffect } from 'react';
import './RoomBookingPopup.css';

const RoomBookingPopup = ({ room, onClose }) => {
    const { hotelName, hotelId, roomId, address, rating, price, amenities } = room;


    const [bookingDetails, setBookingDetails] = useState({
        guests: '2',
        rooms: '1',
        ssn: '',
        fullName: '',
        email: '',
        checkInDate: '',
        checkOutDate: '',
    });
   

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBookingDetails(prev => ({ ...prev, [name]: value }));
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('Booking Details:', bookingDetails);
    //     onClose();
    // };

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/reservations/saveReservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    clientId: bookingDetails.ssn, // Assuming ssn is the client ID
                    hotelId: hotelId, // Pass the hotelId from the room
                    roomId: roomId, // Pass the roomId from the room
                    checkIn: bookingDetails.checkInDate,
                    checkOut: bookingDetails.checkOutDate,
                    status: 'booked', // Set default status
                    paid: false // Set default paid status
                })
            });

            if (!response.ok) {
                throw new Error('Failed to create reservation');
            }

            onClose(); // Close the popup on successful reservation
        } catch (error) {
            console.error('Error creating reservation:', error);
        }
    };



    if (!room) {
        return <div>Loading room details...</div>;
    }

    return (
        <div className="room-booking-popup-overlay">
            <div className="room-booking-popup">
                <button onClick={onClose} className="close-popup-button">×</button>
                <h2>Reserve Your Room</h2>
                <form onSubmit={handleSubmit} className="booking-form">
                    <div className="form-field">
                        <label htmlFor="guests">Number of Guests:</label>
                        <input
                            type="number"
                            id="guests"
                            name="guests"
                            value={bookingDetails.guests}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="rooms">Number of Rooms:</label>
                        <input
                            type="number"
                            id="rooms"
                            name="rooms"
                            value={bookingDetails.rooms}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="SSN">Social Security Number:</label>
                        <input
                            type="text"
                            id="ssn"
                            name="ssn"
                            value={bookingDetails.ssn}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="fullName">Full Name:</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={bookingDetails.fullName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={bookingDetails.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="checkInDate">Check-In Date:</label>
                        <input
                            type="date"
                            id="checkInDate"
                            name="checkInDate"
                            value={bookingDetails.checkInDate}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="checkOutDate">Check-Out Date:</label>
                        <input
                            type="date"
                            id="checkOutDate"
                            name="checkOutDate"
                            value={bookingDetails.checkOutDate}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-booking-btn">Submit Reservation</button>
                </form>
            </div>
        </div>
    );
};

export default RoomBookingPopup;
