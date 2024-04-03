import React, { useState } from 'react';
import { useAuth } from '../components/AuthContext'; // Adjust the path as necessary
import './SignInModal.css';

const SignInModal = ({ isVisible, onClose }) => {
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { signIn } = useAuth();

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ssn: email.trim(), password: password.trim() }),
      });

      let responseData = await response.json();

      if (!response.ok) {
        throw new Error('Failed to authenticate');
      }

      sessionStorage.setItem('ssn', responseData.ssn);
      const ssnFromStorage = sessionStorage.getItem('ssn');
      console.log(ssnFromStorage);

      if (responseData && responseData.ssn) {
        signIn(userType, responseData.name || 'User'); // Use signIn to update global state
        handleClose(); // Close the modal on success
      }
    } catch (error) {
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
