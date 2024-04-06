import React from 'react';
import NavBar from './components/NavBar'; 
import Home from './pages/Home'; 
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JoinUs from './pages/JoinUs';
import FindReserve from './pages/FindReserve';
import AboutUs from './pages/AboutUs'; 
import HotelInfo from './pages/HotelInfo';
import DirectRenting from './pages/DirectRenting';
import EditHotels from './pages/EditHotels'; // Make sure to create this component
import { AuthProvider, useAuth } from './components/AuthContext'; 

function AppRoutes() {
  const { isAuthenticated, userType } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {isAuthenticated && userType === 'employee' ? (
        <>
          <Route path="/direct-renting" element={<DirectRenting />} />
          <Route path="/edit-hotels" element={<EditHotels />} />
        </>
      ) : (
        <>
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/find-reserve" element={<FindReserve />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* Adjusted Route for HotelInfo to use hotelId */}
          <Route path="/hotel-info/:hotelId" element={<HotelInfo />} />
        </>
      )}
      {/* Removed the previous hotelName route and replaced with hotelId */}
      {/* Add other routes here as needed */}
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <NavBar />
          <AppRoutes />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;