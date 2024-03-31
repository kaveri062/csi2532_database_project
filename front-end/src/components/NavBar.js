import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import SignInModal from './SignInModal'; // Make sure the path to SignInModal is correct

function NavBar() {
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility

  const toggleModal = () => setIsModalVisible(!isModalVisible); // Function to toggle modal

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          {/* Use the `Link` component for navigation */}
          <li className="nav-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <li className="nav-item">
            <Link to="/find-reserve">FIND & RESERVE</Link>
          </li>
        </ul>
        <ul className="navbar-nav navbar-right">
        
          <li className="nav-item">
          <Link to="/join-us">Join</Link>
          </li>
          <li className="nav-item" onClick={toggleModal}>
            Sign In {/* Updated to call toggleModal on click */}
          </li>
        </ul>
      </nav>
      <SignInModal isVisible={isModalVisible} onClose={toggleModal} />
    </>
  );
}

export default NavBar;
