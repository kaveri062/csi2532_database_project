import React, { useState, useEffect } from 'react';
import './DirectRenting.css';
import AddReservationForm from '../components/AddReservationForm'; // Adjust the import path as necessary
import JoinUs from './JoinUs'; // Import the JoinUs component

const DirectRenting = () => {
  const [employeeId, setEmployeeId] = useState('111-22-3333'); // Example employee ID
  const [clientSsn, setClientSsn] = useState('');
  const [booking, setBooking] = useState(null);
  const [showAddReservation, setShowAddReservation] = useState(false);
  const [error, setError] = useState(null);
  const [showJoinUs, setShowJoinUs] = useState(false); // State variable to manage the visibility of the JoinUs component

  useEffect(() => {
    if (clientSsn.trim() === '') {
      setError('Please enter the client’s SSN.');
    } else {
      setError(null);
    }
  }, [clientSsn]);

  useEffect(() => {
    fetchBookingData();
  }, []); // Fetch booking data on initial render

  const fetchBookingData = async () => {
    try {
      const response = await fetch('http://localhost:8080/reservations/clientReservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          employeeId,
          clientId: clientSsn,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch booking data');
      }

      const data = await response.json();
      setBooking(data);
    } catch (error) {
      console.error('Fetch error:', error.message);
      setError('Failed to fetch booking data. Please try again.');
    }
  };

  const handleSaveChanges = () => {
    console.log('Booking saved:', booking);
    // Implement save logic here
  };

  const handleDeleteBooking = () => {
    console.log('Booking deleted:', booking);
    setBooking(null);
  };

  const toggleAddReservation = () => {
    setShowAddReservation(!showAddReservation);
  };

  const handleRegisterNewClient = () => {
    // Implement logic to handle registering a new client
    setShowJoinUs(true);
  };

  const handleJoinUsRegistration = () => {
    // Redirect to homepage only if registration is done directly
    window.location.href = 'http://localhost:3000/direct-renting';
  };

  const handleCheckIn = async (reservationId) => {
    try {
      const response = await fetch('http://localhost:8080/reservations/checkInReservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reservation_id: reservationId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to check in');
      }

      const updatedBooking = booking.map(item =>
        item.id === reservationId ? { ...item, status: 'checkedIn' } : item
      );
      setBooking(updatedBooking);
      console.log('Check-in successful');
      console.log('Updated booking:', updatedBooking);
    } catch (error) {
      console.error('Check-in error:', error.message);
    }
  };

  return (
    <div className="direct-renting">
      <div className="button-container">
        {/* Button to toggle visibility of JoinUs component */}
        <button onClick={handleRegisterNewClient} className="register-new-client-btn">
          Register new client
        </button>
        {/* Conditional rendering of JoinUs component */}
        {showJoinUs && <JoinUs onRegistration={handleJoinUsRegistration} />}
        {/* Button to create reservation for existing client */}
        <button onClick={toggleAddReservation} className="add-booking-btn">
          Create Reservation for existing client
        </button>
        {showAddReservation && (
          <AddReservationForm onClose={toggleAddReservation} />
        )}
      </div>

      <input
        type="text"
        placeholder="Enter the client’s SSN"
        value={clientSsn}
        onChange={(e) => setClientSsn(e.target.value)}
        className="email-input"
      />
      <button onClick={fetchBookingData} className="find-booking-btn">
        Find booking
      </button>

      {error && <div className="error">{error}</div>}

      {/* Map over bookings and render each one */}
      {booking && booking.map((bookingItem) => (
        <div className="booking-details" key={bookingItem.id}>
          <h2>Reservation Details</h2>
          <p>Booking ID: {bookingItem.id}</p>
          <p>Client ID: {bookingItem.clientId}</p>
          <p>Hotel ID: {bookingItem.hotelId}</p>
          <p>Room ID: {bookingItem.roomId}</p>
          <p>Check-In: {bookingItem.checkIn}</p>
          <p>Check-Out: {bookingItem.checkOut}</p>
          <p>Status: {bookingItem.status}</p>
          <p>Paid: {bookingItem.paid ? 'Yes' : 'No'}</p>
          <button onClick={handleSaveChanges} className="save-btn">Save</button>
          <button onClick={handleDeleteBooking} className="delete-btn">Delete</button>
          <button onClick={() => handleCheckIn(bookingItem.id)} className="check-in-btn">Check-In</button>
          <div className="payment-method-form">
            {/* Payment method details inputs */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DirectRenting;
