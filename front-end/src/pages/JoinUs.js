import React, { useState } from 'react';
import './JoinUs.css'; 

const JoinUs = ({ onRegistration }) => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [ssn, setSsn] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/client/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          address,
          ssn,
          email,
          password,
          registrationDate: new Date(registrationDate), // Convert to Date object
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to register client');
      }


      //storing the ssn to use later
      sessionStorage.setItem('ssn', ssn);
      const ssnFromStorage = sessionStorage.getItem('ssn');
      sessionStorage.setItem('Client', true)
      console.log(ssnFromStorage);

      console.log('Client registered successfully');
      window.alert('Registered successfully'); // Display alert message


  // Call the onRegistration function passed from the parent component
  if (typeof onRegistration === 'function') {
    onRegistration();
  }
    } catch (error) {
      console.error(fullName,address,ssn,email,password,registrationDate);

      console.error('Error registering client:', error.message);
      // Optionally, handle error here (e.g., display error message to the user)
    }
  };

  return (
    <div className="join-us-container">
      <h1>Join Us</h1>
      <form onSubmit={handleSubmit} className="join-us-form">
        <div className="form-group">
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ssn">Social Security Number / NAS</label>
          <input
            type="text"
            id="ssn"
            value={ssn}
            onChange={(e) => setSsn(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Registration date is not visible to the user but is submitted with the form */}
        <input type="hidden" id="registration-date" value={registrationDate} />
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default JoinUs;
