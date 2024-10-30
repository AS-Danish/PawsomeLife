import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a5736] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Pawsome Life</h3>
            <p>Connecting pets with loving homes since 2024.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300">Adoption Process</a></li>
              <li><a href="#" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300" aria-label="YouTube">YouTube</a>
              <a href="#" className="hover:text-blue-300" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" className="hover:text-blue-300" aria-label="Instagram">Instagram</a>
              <a href="#" className="hover:text-blue-300" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Pawsome Life. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
