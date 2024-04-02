import React, { useState } from 'react';
import './AddReservationForm.css'; // Make sure you create this CSS file

const AddReservationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    hotelChain: '',
    location: '',
    roomsGuests: '',
    date: '',
    fullName: '',
    email: '',
    creditCardNumber: '',
    expiration: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you handle the submission of the reservation data
    console.log(formData);
    onClose();
  };

  return (
    <div className="add-reservation-modal">
      <div className="add-reservation-content">
        <h2>Direct renting</h2>
        <form onSubmit={handleSubmit}>
          {/* Include the form fields based on the provided design */}
          <label>Hotel Chain
            <select name="hotelChain" value={formData.hotelChain} onChange={handleInputChange}>
              <option value="">Select a hotel chain</option>
              <option value="oceanBreezeRetreat">Ocean Breeze Retreat</option>
              {/* Other hotel chain options */}
            </select>
          </label>
          
          <label>Location
            <select name="location" value={formData.location} onChange={handleInputChange}>
              <option value="">Select a location</option>
              <option value="123NewYorkSt">123 New York Street, NY</option>
              {/* Other location options */}
            </select>
          </label>
          
          <label>Number of rooms & guests
            <select name="roomsGuests" value={formData.roomsGuests} onChange={handleInputChange}>
              <option value="">Select rooms and guests</option>
              <option value="1Room2Guests">1 Room, 2 Guests</option>
              {/* Other room and guest options */}
            </select>
          </label>
          
          <label>Full name
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
          </label>
          
          <label>Email address
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
          
          <label>Date
            <input type="text" name="date" value={formData.date} onChange={handleInputChange} />
          </label>
          
          {/* Add payment method details */}
          <div className="payment-method-form">
            <input type="text" name="creditCardNumber" placeholder="Credit card number" value={formData.creditCardNumber} onChange={handleInputChange} />
            <input type="text" name="expiration" placeholder="Expiration" value={formData.expiration} onChange={handleInputChange} />
            <input type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleInputChange} />
          </div>
          
          <div className="total-amount">
            Total $215 CAD
          </div>
          
          <button type="submit" className="confirm-payment-btn">
            Confirm payment
          </button>
        </form>
        
        <button onClick={onClose} className="close-modal-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default AddReservationForm;
