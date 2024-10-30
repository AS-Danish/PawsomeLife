import React from 'react';

const Banner = () => {
  return (
    <div className="bg-[#1a5736] text-white py-10 md:py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Find your favorite pet to adopt!</h2>
        <p className="text-lg md:text-xl mb-6 md:mb-8">Give a loving home to a pet in need and experience the joy of unconditional love.</p>
        <button
          className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#b6f1c4] /30 backdrop-blur-lg px-6 py-2 text-base font-semibold transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[#010a05]/50 border border-white/20"
        >
          <span className="text-lg" style={{ color: '#1a5736' }}>Start Adopting Now!</span>
          <div
            className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
          >
            <div className="relative h-full w-10 bg-white/30"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Banner;
