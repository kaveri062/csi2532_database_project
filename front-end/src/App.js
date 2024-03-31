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

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes> {/* Use Routes for defining paths */}
          <Route path="/" element={<Home />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/find-reserve" element={<FindReserve />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/hotels/:hotelName" element={<HotelInfo />} />
          {/* Define other routes as needed */}
        </Routes>
        <Footer /> {/* Footer component added here */}
      </div>
    </Router>
  );
}

export default App;
