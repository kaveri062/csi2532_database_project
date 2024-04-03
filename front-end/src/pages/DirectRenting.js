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
      console.log('API response:', data);
      
      if (Array.isArray(data) && data.length > 0) {
        setBooking(data); // Update state with the array of bookings
        console.log('Bookings found:', data);
      } else {
        setBooking(null);
        console.log('No bookings found for that SSN.');
        setError('No bookings found for that SSN.');
      }
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
    window.location.href='http://localhost:3000/direct-renting';
  };

  return (
    <div className="direct-renting">
      {/* Button container for new client registration and reservation creation */}
    <div className="button-container">
      {/* Button to toggle visibility of JoinUs component */}
      <button onClick={handleRegisterNewClient} className="register-new-client-btn">
        Register new client
      </button>
      
      {/* Conditional rendering of JoinUs component */}
      {showJoinUs && <JoinUs onRegistration={handleJoinUsRegistration} />}
      {/* Button to create reservation for existing client */}
      <button className="create-reservation-btn" onClick={toggleAddReservation}>
        
      </button>
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
        <h2>{bookingItem.clientId}</h2>
        <p>Check-in: {bookingItem.checkIn}</p>
        <p>Check-out: {bookingItem.checkOut}</p>
        {/* Add buttons and payment method form for each booking */}
        <button onClick={handleSaveChanges} className="save-btn">Save</button>
        <button onClick={handleDeleteBooking} className="delete-btn">Delete</button>
        <div className="payment-method-form">
          {/* Payment method details inputs */}
        </div>
      </div>
    ))}

      
    </div>
  );
};

export default DirectRenting;
