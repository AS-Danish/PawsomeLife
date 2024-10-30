import React, { useState } from 'react';

const AdoptionPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateAgeInput = (e) => {
    const value = parseInt(e.target.value);
    if (value < 0) {
      e.target.value = '0';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-[#b6f1c4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-[#1a5736] p-4">
          <button
            onClick={() => {/* Add navigation logic here */}}
            className="flex items-center text-white hover:text-indigo-100 transition duration-150"
          >
            <span className="material-icons">arrow_back</span>
            Back to Home
          </button>
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-[#1a5736] mb-8">List Your Pet for Adoption</h1>
          {formSubmitted ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">Adoption form successfully submitted!</h2>
              <p className="text-gray-600">Thank you for listing your pet. We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-[#1a5736] mb-4">Adopter Details</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name of Adopter</label>
                    <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a5736] focus:ring focus:ring-[#1a5736] focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
                    <input type="tel" id="contact" name="contact" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a5736] focus:ring focus:ring-[#1a5736] focus:ring-opacity-50" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <textarea id="address" name="address" rows={3} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a5736] focus:ring focus:ring-[#1a5736] focus:ring-opacity-50"></textarea>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="rehomingReason" className="block text-sm font-medium text-gray-700">Reason for Rehoming Your Pet</label>
                    <textarea id="rehomingReason" name="rehomingReason" rows={3} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a5736] focus:ring focus:ring-[#1a5736] focus:ring-opacity-50"></textarea>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-[#1a5736] mb-4">Pet Details</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="petName" className="block text-sm font-medium text-gray-700">Name of Pet</label>
                    <input type="text" id="petName" name="petName" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a5736] focus:ring focus:ring-[#1a5736] focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                    <input type="number" id="age" name="age" required onChange={validateAgeInput} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a5736] focus:ring focus:ring-[#1a5736] focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <select id="category" name="category" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a5736] focus:ring focus:ring-[#1a5736] focus:ring-opacity-50">
                      <option value="">Select a category</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="bird">Bird</option>
                      <option value="rabbit">Rabbit</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="vaccination" className="block text-sm font-medium text-gray-700">Vaccination Status</label>
                    <select id="vaccination" name="vaccination" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a5736] focus:ring focus:ring-[#1a5736] focus:ring-opacity-50">
                      <option value="">Select status</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price (in Rs.)</label>
                    <input type="number" id="price" name="price" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a5736] focus:ring focus:ring-[#1a5736] focus:ring-opacity-50" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description of Pet</label>
                    <textarea id="description" name="description" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1a5736] focus:ring focus:ring-[#1a5736] focus:ring-opacity-50"></textarea>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Upload Image of Pet</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        {imagePreview ? (
                          <img src={imagePreview} alt="Pet Preview" className="mx-auto h-32 w-32 object-cover rounded-md" />
                        ) : (
                          <span className="material-icons">upload</span>
                        )}
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-[#1a5736] hover:text-[#1a5736] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#1a5736]">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".jpg,.png" onChange={handleImageUpload} required />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="px-4 py-2 bg-[#1a5736] text-white rounded-lg hover:bg-[#2e7d4d] transition duration-200">Submit for Adoption</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdoptionPage;
