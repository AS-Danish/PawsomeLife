import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const SignIn = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the login data to the backend
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Login successful') {
          alert('Login successful!');
          onLogin(data.user); // Call onLogin prop with user data
          navigate('/'); // Redirect to the home page
        } else {
          alert(data.error || 'Login failed. Try again.');
        }
      })
      .catch((err) => {
        alert('Error: Could not log in');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-[28rem]">
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Pawsome Life Logo" className="w-14 h-14 mr-3" />
          <h1 className="text-4xl font-bold text-[#1a5736]">Pawsome Life</h1>
        </div>
        <h2 className="text-3xl font-semibold text-[#1a5736] mb-8 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5736]"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5736]"
              required
            />
          </div>
          <button type="submit" className="w-full bg-[#1a5736] text-white py-3 px-4 rounded-md hover:bg-[#134228] transition duration-300">Sign In</button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/register" className="text-[#1a5736] hover:underline">New user? Register now</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
