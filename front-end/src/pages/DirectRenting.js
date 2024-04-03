import React, { useState, useEffect } from 'react';
import './DirectRenting.css';
import AddReservationForm from '../components/AddReservationForm'; // Adjust the import path as necessary

const DirectRenting = () => {
  const [employeeId, setEmployeeId] = useState('111-22-3333'); // Example employee ID
  const [clientSsn, setClientSsn] = useState('');
  const [booking, setBooking] = useState(null);
  const [showAddReservation, setShowAddReservation] = useState(false);
  const [error, setError] = useState(null);

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
      console.log('API response:', data); // Log the API response for debugging

      // Assuming data is an array and we want the first item
      if (Array.isArray(data) && data.length > 0) {
        setBooking(data[0]);
        console.log('Booking found:', data[0]);
      } else {
        setBooking(null);
        console.log('No booking found for that SSN.');
        setError('No booking found for that SSN.');
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

  return (
    <div className="direct-renting">
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

      {booking && (
        <div className="booking-details">
          <h2>{booking.clientId}</h2> {/* Display client ID */}
          <p>Check-in: {booking.checkIn}</p>
          <p>Check-out: {booking.checkOut}</p>
          <button onClick={handleSaveChanges} className="save-btn">Save</button>
          <button onClick={handleDeleteBooking} className="delete-btn">Delete</button>
          <div className="payment-method-form">
            {/* Payment method details inputs */}
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
