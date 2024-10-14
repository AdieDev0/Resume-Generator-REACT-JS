import React from "react";

const Experience = () => {
  return (
    <div>
      <p className="text-3xl font-semibold text-gray-900 mb-6">Experience</p>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <label className="text-lg font-medium text-gray-800" htmlFor="name">
            Company Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Company Name"
            className="bg-white text-gray-900 p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-800 transition duration-300"
            required
          />
        </div>
        <div className="grid gap-2">
          <label className="text-lg font-medium text-gray-800" htmlFor="position">
            Position
          </label>
          <input
            type="text"
            id="position"
            placeholder="Enter Position"
            className="bg-white text-gray-900 p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-800 transition duration-300"
            required
          />
        </div>
        <div className="flex gap-6">
          <div className="w-1/2">
            <p className="text-lg font-medium text-gray-800">Start Date</p>
            <input
              type="date"
              className="bg-white text-gray-900 p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-800 transition duration-300"
              required
            />
          </div>
          <div className="w-1/2">
            <p className="text-lg font-medium text-gray-800">End Date</p>
            <input
              type="date"
              className="bg-white text-gray-900 p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-800 transition duration-300"
              required
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="checkbox checkbox-sm text-gray-700 focus:ring-2 focus:ring-gray-600"
          />
          <p className="text-gray-700 text-sm font-medium">
            Currently working here
          </p>
        </div>
        <textarea
          placeholder="Job Description"
          className="bg-white text-gray-900 p-3 border border-gray-300 rounded-lg shadow h-24 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-800 transition duration-300"
          required
        />
        <button className="bg-gray-900 hover:bg-gray-700 text-white p-3 rounded-lg shadow w-full font-medium transition duration-200">
          + Add Experience
        </button>
      </div>
    </div>
  );
};

export default Experience;
