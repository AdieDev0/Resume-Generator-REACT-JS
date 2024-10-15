import React from 'react';

const Personal = ({ data, onChange }) => {
  // Function to handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    onChange({
      ...data,
      [id]: value, // Update the corresponding field in the state
    });
  };

  return (
    <div>
      <p className="text-3xl font-semibold text-black mb-6">Personal Information</p>
      <div className="grid gap-4">
        {/* Full Name */}
        <div className="grid gap-2">
          <label className="text-lg font-medium text-black" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={data.name}  // Controlled input
            onChange={handleInputChange}
            placeholder="Enter Name"
            className="bg-white text-black p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-900 transition duration-300"
            required
          />
        </div>

        {/* Email */}
        <div className="grid gap-2">
          <label className="text-lg font-medium text-black" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={data.email}  // Controlled input
            onChange={handleInputChange}
            placeholder="Enter Email"
            className="bg-white text-black p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-900 transition duration-300"
            required
          />
        </div>

        {/* Phone */}
        <div className="grid gap-2">
          <label className="text-lg font-medium text-black" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={data.phone}  // Controlled input
            onChange={handleInputChange}
            placeholder="Enter Phone Number"
            className="bg-white text-black p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-900 transition duration-300"
            required
          />
        </div>

        {/* Location */}
        <div className="grid gap-2">
          <label className="text-lg font-medium text-black" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={data.location}  // Controlled input
            onChange={handleInputChange}
            placeholder="Enter Location"
            className="bg-white text-black p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-900 transition duration-300"
            required
          />
        </div>

        {/* Summary */}
        <div className="grid gap-2">
          <label className="text-lg font-medium text-black" htmlFor="summary">
            Summary
          </label>
          <textarea
            id="summary"
            value={data.summary}  // Controlled input
            onChange={handleInputChange}
            placeholder="Enter Summary"
            className="bg-white text-black p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-900 h-28 resize-none transition duration-300"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Personal;
