import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    hasPet: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'User registered successfully') {
          alert('Registration successful!');
          navigate('/signin');
        } else {
          alert('Registration failed. Try again.');
        }
      })
      .catch(() => {
        alert('Error: Could not register');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-[28rem]">
        <div className="flex items-center justify-center mb-4">
          <img src={logo} alt="Pawsome Life Logo" className="w-12 h-12 mr-2" />
          <h1 className="text-3xl font-bold text-[#1a5736]">Pawsome Life</h1>
        </div>
        <h2 className="text-2xl font-semibold text-[#1a5736] mb-5 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5736]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5736]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Do you have a pet?</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="hasPet"
                  value="yes"
                  checked={formData.hasPet === 'yes'}
                  onChange={handleChange}
                  className="form-radio text-[#1a5736]"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="hasPet"
                  value="no"
                  checked={formData.hasPet === 'no'}
                  onChange={handleChange}
                  className="form-radio text-[#1a5736]"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5736]"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a5736]"
              required
            />
          </div>
          <button type="submit" className="w-full bg-[#1a5736] text-white py-2 px-4 rounded-md hover:bg-[#134228] transition duration-300">Sign Up</button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/signin" className="text-[#1a5736] hover:underline">Already have an account? Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
