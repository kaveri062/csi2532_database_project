import React, { useState } from 'react';
import './RBC.css';

const RBC = ({ room, onClose }) => {
    console.log("RBC rendered");

    const [bookingDetails, setBookingDetails] = useState({
        guests: '2',
        rooms: '1',
        fullName: '',
        email: '',
        checkInDate: '',
        checkOutDate: '',
        roomType: 'Suite',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBookingDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Booking Details:', bookingDetails);
        onClose();
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
                    <div className="form-field">
                        <label htmlFor="roomType">Room Type:</label>
                        <select
                            id="roomType"
                            name="roomType"
                            value={bookingDetails.roomType}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="Suite">Suite</option>
                            <option value="Deluxe">Deluxe</option>
                            <option value="Standard">Standard</option>
                        </select>
                    </div>
                    <button type="submit" className="submit-booking-btn">Submit Reservation</button>
                </form>
            </div>
        </div>
    );
};

export default RBC;
