import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Categories from './components/Categories';
import AdoptionPage from './components/AdoptionPage';
import Banner from './components/Banner';
import AboutTeam from './components/AboutTeam';
import Register from './components/Register';
import SignIn from './components/SignIn';
import PetOverview from './components/PetOverview'; // Import PetOverview
import React, { useState, useEffect } from 'react';

function App() {
  const [username, setUsername] = useState(null);

  // Retrieve user from localStorage when the app loads
  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setUsername(storedUser); // Set the username from localStorage
    }
  }, []);

  const handleLogin = (user) => {
    setUsername(user.fullName); // Set username after login
    localStorage.setItem('username', user.fullName); // Store username in localStorage
  };

  const handleLogout = () => {
    setUsername(null); // Clear username on logout
    localStorage.removeItem('username'); // Remove username from localStorage
  };

  return (
    <Router>
      <div className="min-h-screen w-full bg-gray-100 overflow-x-hidden">
        <Navbar username={username} onLogout={handleLogout} />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Categories />
                <AdoptionPage />
                <Banner />
                <AboutTeam />
              </>
            } />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
            <Route path="/pet/:id" element={<PetOverview />} /> {/* Add route for PetOverview */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
