import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PetOverview = () => {
  const { id } = useParams(); // Get the ID from the URL params
  const [pet, setPet] = useState(null); // State to hold pet data
  const [error, setError] = useState(null); // State to handle error messages
  const [loading, setLoading] = useState(true); // State to handle loading status

  useEffect(() => {
    console.log("Fetching pet with ID:", id); // Log the ID for debugging

    const fetchPetDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/pets/${id}`);
        setPet(response.data); // Set pet data from the response
      } catch (err) {
        console.error('Error fetching pet:', err);
        setError('Failed to load pet details. Please try again later.'); // Set error message
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchPetDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>; // Loading state
  if (error) return <p>{error}</p>; // Display error if exists
  if (!pet) return <p>Pet not found.</p>; // If pet is not found

  return (
    <div className="min-h-screen bg-[#b6f1c4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#1a5736]/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[#010a05]/50 border border-white/20"
          >
            <span className="h-5 w-5 mr-2">&#x2190;</span> {/* ArrowLeft icon */}
            <span className="text-lg">Back to Home</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-white/30"></div>
            </div>
          </button>
        </div>
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition duration-300">
          <div className="md:flex">
            <div className="md:flex-shrink-0 relative">
              <img className="h-96 w-full object-cover md:w-96" src={pet.image} alt={pet.name} />
              <div className="absolute top-4 left-4 bg-white bg-opacity-75 rounded-full px-3 py-1 text-sm font-semibold text-indigo-600">
                {pet.category}
              </div>
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{pet.name}</h2>
              <p className="text-2xl text-indigo-600 mb-6">{pet.species}</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="h-6 w-6 text-gray-400 mr-3">&#x1F5C0;</span> {/* Calendar icon */}
                  <span className="text-gray-700 font-medium">Age:</span>
                  <span className="ml-2 text-gray-600">{pet.age}</span>
                </div>
                <div className="flex items-center">
                  <span className="h-6 w-6 text-gray-400 mr-3">&#x1F489;</span> {/* Syringe icon */}
                  <span className="text-gray-700 font-medium">Vaccination Status:</span>
                  <span className={`ml-2 ${pet.vaccinationStatus ? 'text-green-600' : 'text-red-600'} font-semibold`}>
                    {pet.vaccinationStatus ? 'Vaccinated' : 'Not Vaccinated'}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="h-6 w-6 text-gray-400 mr-3">&#x1F4DE;</span> {/* Phone icon */}
                  <span className="text-gray-700 font-medium">Shelter Contact:</span>
                  <a href={`tel:${pet.contactNumber}`} className="ml-2 text-blue-600 hover:text-blue-800 font-semibold">
                    {pet.contactNumber}
                  </a>
                </div>
                <div className="flex items-start">
                  <span className="h-6 w-6 text-gray-400 mr-3 mt-1">&#x2139;</span> {/* Info icon */}
                  <div>
                    <span className="text-gray-700 font-medium">About {pet.name}:</span>
                    <p className="mt-1 text-gray-600 leading-relaxed">{pet.description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button className="w-full bg-[#1a5736] text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300 flex items-center justify-center">
                  <span className="h-5 w-5 mr-2">&#x2764;</span> {/* Heart icon */}
                  Adopt Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetOverview;
