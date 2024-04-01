import React, { useState } from 'react';
import './DirectRenting.css';
import AddReservationForm from '../components/AddReservationForm'; // Adjust the import path as necessary

const DirectRenting = () => {
  const [email, setEmail] = useState('');
  const [booking, setBooking] = useState(null);
  const [showAddReservation, setShowAddReservation] = useState(false);

  const handleFindBooking = async () => {
    // Replace this with an actual API call
    console.log('Searching for booking for:', email);
    if (email === 'johndoe@example.com') {
      const mockBookingData = {
        clientName: 'John Doe',
        clientEmail: 'johndoe@example.com',
        details: 'Mar 12 - Mar 13 2024, 1 Room, 2 Guests',
        price: '215',
      };
      setBooking(mockBookingData);
      console.log('Booking found:', mockBookingData);
    } else {
      setBooking(null);
      console.log('No booking found.');
    }
  };

  const handleSaveChanges = () => {
    console.log('Booking saved:', booking);
  };

  const handleDeleteBooking = () => {
    console.log('Booking deleted:', booking);
    setBooking(null);
  };

  const toggleAddReservation = () => {
    setShowAddReservation(!showAddReservation);
  };

  return (
    <div className="direct-renting">
      <input
        type="email"
        placeholder="Enter the client’s email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email-input"
      />
      <button onClick={handleFindBooking} className="find-booking-btn">
        Find booking
      </button>

      {booking && (
        <div className="booking-details">
          <h2>{booking.clientName} - {booking.clientEmail}</h2>
          <p>{booking.details}</p>
          <button onClick={handleSaveChanges} className="save-btn">Save</button>
          <button onClick={handleDeleteBooking} className="delete-btn">Delete</button>
          {/* Add form elements for payment method details */}
          <div className="payment-method-form">
            <input placeholder="Credit card number" />
            <input placeholder="Expiration" />
            <input placeholder="CVV" />
            <div>Total ${booking.price} CAD</div>
            <button onClick={handleSaveChanges} className="confirm-btn">Confirm payment</button>
          </div>
        </div>
      )}

      <button onClick={toggleAddReservation} className="add-booking-btn">
        Add Reservation
      </button>

      {showAddReservation && (
        <AddReservationForm onClose={toggleAddReservation} />
      )}
    </div>
  );
};

export default DirectRenting;
