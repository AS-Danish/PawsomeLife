import React from 'react';
import AdoptionSection from './AdoptionSection'; // Adjust the import path as necessary

const AdoptionPage = () => {
  return (
    <div>
      <header className="bg-[#1a5736] text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Welcome to Pawsome Life</h1>
        <p className="mt-2">Find your perfect furry friend!</p>
      </header>

      <main>
        {/* Render AdoptionSection for each category */}
        <AdoptionSection category="Dogs" />
        <AdoptionSection category="Cats" />
        <AdoptionSection category="Birds" />
        <AdoptionSection category="Hamsters" />
      </main>

      <footer className="bg-[#1a5736] text-white py-4 text-center">
        <p>&copy; 2024 Pawsome Life. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdoptionPage;
