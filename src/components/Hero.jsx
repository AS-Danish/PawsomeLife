import React from 'react';
import pets from '../assets/pets.png';

const Hero = () => {
  return (
    <div className="w-full h-screen bg-[#b6f1c4] flex items-center justify-center px-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <div className="max-w-lg mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[#173a13]">Adopt Us</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#173a13]">Find Your Perfect Companion!</h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-[#173a13]">
            Discover joy, love, and endless cuddles with your new furry friend from Pawsome Life...
          </p>
          
          {/* Custom Adoption Button */}
          <button
            className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#1a5736] backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[#010a05]/50 border border-white/20"
          >
            <span className="text-lg">Start Adopting</span>
            <div
              className="absolute inset-0 flex h-full w-full justify-center transform -skew-x-12 -translate-x-full group-hover/button:duration-1000 group-hover/button:transform group-hover/button:translate-x-full"
            >
              <div className="relative h-full w-10 bg-white/30"></div>
            </div>
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2 max-w-xs sm:max-w-md transform scale-125 md:scale-150" style={{ marginLeft: 'auto', marginRight: '-50px' }}> {/* Adjusted margin-right */}
          <img src={pets} alt="Happy pets" className="rounded-lg w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
