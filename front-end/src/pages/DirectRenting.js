import React, { useState } from 'react';
import './DirectRenting.css';
import AddReservationForm from '../components/AddReservationForm'; // Adjust the import path as necessary

const DirectRenting = () => {
  const [ssn, setSsn] = useState(''); // Use SSN instead of email
  const [booking, setBooking] = useState(null);
  const [showAddReservation, setShowAddReservation] = useState(false);

  const handleFindBooking = async () => {
    // Replace this mock logic with an actual API call using SSN
    console.log('Searching for booking for SSN:', ssn);
    if (ssn === '123-45-6789') { // Example SSN, replace with actual logic
      const mockBookingData = {
        clientName: 'John Doe',
        clientSSN: '123-45-6789', // Use SSN in the data
        details: 'Mar 12 - Mar 13 2024, 1 Room, 2 Guests',
        price: '215',
      };
      setBooking(mockBookingData);
      console.log('Booking found:', mockBookingData);
    } else {
      setBooking(null);
      console.log('No booking found for that SSN.');
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
        type="text" // SSN might include dashes, so 'text' type is more appropriate
        placeholder="Enter the client’s SSN"
        value={ssn}
        onChange={(e) => setSsn(e.target.value)}
        className="email-input" // Consider renaming this class to something more generic like 'input-field'
      />
      <button onClick={handleFindBooking} className="find-booking-btn">
        Find booking
      </button>

      {booking && (
        <div className="booking-details">
          <h2>{booking.clientName} - {booking.clientSSN}</h2> // Display SSN
          <p>{booking.details}</p>
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
