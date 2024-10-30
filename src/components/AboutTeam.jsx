import React from 'react';
import AtharvaImage from '../assets/Atharva.png';
import DanishImage from '../assets/danish.png';
import NirajImage from '../assets/niraj.png';

const teamMembers = [
  {
    name: 'Atharva Kulkarni',
    role: 'Founder & CEO',
    image: AtharvaImage,
  },
  {
    name: 'Abdul Danish',
    role: 'Head Veterinarian',
    image: DanishImage,
  },
  {
    name: 'Niraj Hatote',
    role: 'Adoption Specialist',
    image: NirajImage,
  },
];

const AboutTeam = () => {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">About Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 md:mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          At Pawsome Life, we are a passionate group of pet lovers, tech enthusiasts, and community builders. Our team is driven by the goal of connecting people with their perfect pet companions and supporting animal shelters in their mission to provide loving homes to pets in need.
          </p>

          <br></br>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We envision a world where every pet has a loving home and where pet owners have all the resources they need to care for their furry, feathery, or scaly friends. At Pawsome Life, we are committed to enhancing the pet adoption experience and ensuring that every adoption story ends with a happily ever after.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
