import React from 'react';
import NavBar from './components/NavBar'; // Make sure the path is correct
import Home from './pages/Home'; // Make sure the path is correct
import Footer from './components/Footer'; // Import the Footer component
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JoinUs from './pages/JoinUs';
import FindReserve from './pages/FindReserve';
import AboutUs from './pages/AboutUs'; // Ensure this component exists and the path is correct
import HotelInfo from './pages/HotelInfo'; // Ensure this component exists and the path is correct
import { AuthProvider } from './components/AuthContext'; // Import the AuthProvider
import DirectRenting from './pages/DirectRenting'; 

function App() {
  return (
    <AuthProvider> {/* Wrap the Router (and thereby the whole app) in AuthProvider */}
      <Router>
        <div className="App">
          <NavBar />
          <Routes> {/* Use Routes for defining paths */}
            <Route path="/" element={<Home />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/find-reserve" element={<FindReserve />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/hotels/:hotelName" element={<HotelInfo />} />
            <Route path="/direct-renting" element={<DirectRenting />} />
            {/* Define other routes as needed */}
          </Routes>
          <Footer /> {/* Footer component added here */}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
