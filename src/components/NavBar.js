import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import SignInModal from './SignInModal';
import { useAuth } from './AuthContext';

function NavBar() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { isAuthenticated, userType, full_name, signOut } = useAuth();

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">HOME</Link>
          </li>
          {isAuthenticated && userType === 'employee' ? (
            // Navigation options for authenticated employees
            <>
              <li className="nav-item">
                <Link to="/direct-renting">DIRECT RENTING</Link>
              </li>
              <li className="nav-item">
                <Link to="/edit-hotels">EDIT HOTELS</Link>
              </li>
            </>
          ) : (
            // Navigation options for non-authenticated users or clients
            <>
              <li className="nav-item">
                <Link to="/about-us">ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link to="/find-reserve">FIND & RESERVE</Link>
              </li>
            </>
          )}
        </ul>
        <ul className="navbar-nav navbar-right">
          {isAuthenticated ? (
            <>
              <li className="nav-item">
                Welcome, {full_name}
              </li>
              <li className="nav-item" onClick={signOut}>
                SIGN OUT
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/join-us">Join</Link>
              </li>
              <li className="nav-item" onClick={toggleModal}>
                Sign In
              </li>
            </>
          )}
        </ul>
      </nav>
      {!isAuthenticated && <SignInModal isVisible={isModalVisible} onClose={toggleModal} />}
    </>
  );
}

export default NavBar;
