import React, { useState } from 'react';
import './SignInModal.css'; // Ensure the CSS file is correctly linked

const SignInModal = ({ isVisible, onClose }) => {
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleClose = () => {
    setUserType('');
    setEmail('');
    setPassword('');
    setError('');
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {

      const response = await fetch(`http://localhost:8080/${userType === 'employee' ? 'employees' : 'client'}/authenticate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({
          ssn: email.trim(), // Assuming email is the SSN for employees and clients
          password: password.trim(),
        }),
      });

      // const data = await response.json();
      let responseData;
  try {
    responseData = await response.json(); // Parse response body as JSON
  } catch (jsonError) {
    console.error('Error parsing JSON response:', jsonError.message);
    throw new Error('Unexpected response format');
  }

      if (!response.ok) {
        throw new Error('Failed to authenticate');
      }

      if (responseData && responseData.ssn) {
        const ssn = responseData.ssn;
        sessionStorage.setItem('ssn', ssn);
        const ssnFromStorage = sessionStorage.getItem('ssn');
        userType === 'employee' ? sessionStorage.setItem('Client', false) : sessionStorage.setItem('Client', true);

      console.log(ssnFromStorage, userType);     

      }

//storing the ssn to use later
      console.log('Authentication successful:');
      handleClose();
    } catch (error) {
      console.error('Error during authentication:', error.message);
      setError(error.message);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button onClick={handleClose} className="close-button">×</button>
        {error && <div className="error-message">{error}</div>}
        {userType === '' ? (
          <div className="user-type-selection">
            <h2>Select User Type</h2>
            <button onClick={() => setUserType('employee')}>Employee</button>
            <button onClick={() => setUserType('customer')}>Customer</button>
          </div>
        ) : (
          <>
            <h2>Sign In as {userType.charAt(0).toUpperCase() + userType.slice(1)}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="SSN"
                required
                className="input-field"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="input-field"
              />
              <button type="submit" className="submit-button">Sign In</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SignInModal;
