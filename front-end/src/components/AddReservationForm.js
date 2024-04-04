import React, { useState, useEffect } from 'react';
import './AddReservationForm.css'; // Make sure you create this CSS file

const AddReservationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    roomsGuests: '',
    roomId:'',
    clientSsn: '',
    creditCardNumber: '',
    expiration: '',
    cvv: '',
  });

  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [roomID, setRoomID] = useState('');


  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('http://localhost:8080/findAndReserve/roomsByEmployeeId', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            employeeId: sessionStorage.getItem('ssn'),
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch rooms');
        }

        const data = await response.json();
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const handleRoomChange = (e) => {
    const roomId = e.target.value;
    const selectedRoom = rooms.find(room => room.id === roomId);
    setSelectedRoom(selectedRoom || {}); // Set to an empty object if selectedRoom is undefined
    setRoomID(roomId);
  };

  useEffect(() => {
    console.log("room", roomID); // Log the updated roomID
  }, [roomID]); // Run this effect when roomID changes


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8080/reservations/saveEmployeeReservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            clientId: formData.clientSsn, // Assuming ssn is the client ID
            employeeId: sessionStorage.getItem('ssn'),
            roomId: parseInt(roomID, 10), // Pass the roomId from the room
            checkIn: formData.checkIn,
            checkOut: formData.checkOut,
            status: 'checkedIn', // Set default status
            paid: true // Set default paid status           
          }
        ),
      });

      if (!response.ok) {
        throw new Error('Failed to create reservation');
      }


      // Handle success, such as displaying a success message
      console.log('Reservation created successfully');
      window.alert('Registered successfully'); // Display alert message

      onClose(); // Close the modal on success
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="add-reservation-modal">
      <div className="add-reservation-content">
        <h2>Direct renting</h2>
        <form onSubmit={handleSubmit}>
          {/* Include the form fields based on the provided design */}
          
          <label>Client Social Security Number
          <input type="text" name="clientSsn" placeholder="Social Security Number" value={formData.clientSsn} onChange={handleInputChange} />
          </label>

          <label>Number of rooms & guests
            <select name="roomsGuests" value={formData.roomsGuests} onChange={handleInputChange}>
              <option value="">Select rooms and guests</option>
              <option value="1Room2Guests">1 Room, 2 Guests</option>
              {/* Other room and guest options */}
            </select>
          </label>
          
          
          
          <div className="input-group">
          <label htmlFor="check-in" className="input-label">Check-in date</label>
          <input
            type="date"
            id="check-in"
            value={formData.checkIn}
            className="input-field"
            onChange={e => setFormData({ ...formData, checkIn: e.target.value })}
          />
        </div>
        <div className="input-group">
          <label htmlFor="check-out" className="input-label">Check-out date</label>
          <input
            type="date"
            id="check-out"
            value={formData.checkOut}
            onChange={e => setFormData({ ...formData, checkOut: e.target.value })}
            className="input-field"
          />
        </div>


        <div>
      <label htmlFor="room-select">Select a room:</label>
      <select id="room-select" value={selectedRoom.id} onChange={handleRoomChange}>
        <option value="">Select a room</option>
        {rooms.map((room) => (
          <option key={room.id} value={room.id}>
            {room.id}
            {room.type} - {room.price}
          </option>
        ))}
      </select>
   </div>
          
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
