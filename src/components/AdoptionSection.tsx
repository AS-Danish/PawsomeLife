import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Pet {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  age: number;
}

interface AdoptionSectionProps {
  category: 'Dogs' | 'Cats' | 'Birds' | 'Hamsters';
}

const AdoptionSection: React.FC<AdoptionSectionProps> = ({ category }) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/pets/${category}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch pets');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Log the data for debugging
        if (Array.isArray(data)) {
          setPets(data);
        } else {
          setPets([]); // Handle unexpected data format
          setError('Unexpected data format');
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="py-12 md:py-16 bg-[#b6f1c4]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#0d4024] md:mb-10">Adopt {category}</h2>

        {loading && <p className="text-center">Loading pets...</p>}
        {error && <p className="text-red-500 text-center">Error: {error}</p>}
        
        {Array.isArray(pets) && pets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            {pets.map((pet) => (
              <Link key={pet._id} to={`/pet/${pet._id}`} className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-[#0d4024] transition-shadow">
                <div className="w-52 h-40 bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${pet.image})` }}></div>
                <div>
                  <p className="font-extrabold">{pet.name}</p>
                  <p>{pet.description}</p>
                  <p>Price: ${pet.price}</p>
                  <p>Age: {pet.age} years</p>
                </div>
                <button className="bg-[#1a5736] font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
              </Link>
            ))}
          </div>
        ) : (
          !loading && !error && <p className="text-center">No pets available for adoption in this category.</p>
        )}
      </div>
    </div>
  );
};

export default AdoptionSection;
