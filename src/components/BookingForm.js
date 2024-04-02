import React from 'react';
import './BookingForm.css'; // Make sure you create and import the corresponding CSS file

const BookingForm = ({ room, onClose }) => {
  // You can have useState hooks here to manage form state
  // For demonstration, only the necessary parts are included

  return (
    <div className="booking-form-overlay">
      <div className="booking-form-container">
        <h2>Direct renting</h2>
        <form>
          {/* Your form inputs and selections go here */}
          <div className="booking-form-row">
            <label>
              Hotel Chain
              <select>
                {/* Dynamically populate options based on available hotel chains */}
                <option value={room.chainName}>{room.chainName}</option>
              </select>
            </label>
            <label>
              Location
              <select>
                {/* Dynamically populate options based on hotel locations */}
                <option value={room.address}>{room.address}</option>
              </select>
            </label>
          </div>
          {/* Other form elements */}
        </form>
        <div className="booking-form-actions">
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit">Confirm payment</button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
