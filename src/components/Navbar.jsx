import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Update this path as needed

const Navbar = ({ username, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    onLogout(); // Call the logout handler passed as a prop
  };

  return (
    <nav className="bg-green-800 text-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Pawsome Life Logo" className="h-8" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Pawsome Life</span>
        </div>

        {/* Centered Buttons (hidden on small screens) */}
        <div className="hidden md:flex flex-grow justify-center space-x-4">
          <button className="overflow-hidden relative w-32 p-2 h-12 bg-limegreen text-white border-none rounded-md text-xl font-bold cursor-pointer group">
            Stories
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Explore!</span>
          </button>
          <button className="overflow-hidden relative w-32 p-2 h-12 bg-limegreen text-white border-none rounded-md text-xl font-bold cursor-pointer group">
            Adoption
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Explore!</span>
          </button>
        </div>

        {/* Right-side: Username or Sign In */}
        <div className="flex space-x-3 items-center">
          {username ? (
            <>
              <span className="text-lg">{username}</span> {/* Display username */}
              <button onClick={handleLogout} className="text-lg text-green-800 bg-gray-50 border border-gray-300 rounded-md px-4 py-2">
                Log Out
              </button>
            </>
          ) : (
            <Link to="/signin">
              <button
                type="submit"
                className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-green-800 bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
              >
                Sign In
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <span>&times;</span> : <span>&#9776;</span>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <a href="#" className="block py-2 text-white hover:bg-green-700">
            <span className="inline-block mr-1">&#128214;</span> Stories
          </a>
          <a href="#" className="block py-2 text-white hover:bg-green-700">
            <span className="inline-block mr-1">&#128062;</span> Adoption
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
