import React, { useState } from "react";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  const handleAddExperience = () => {
    // Add a new experience object to the experiences array
    setExperiences([
      ...experiences,
      {
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        jobDescription: "",
      },
    ]);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = experiences.map((exp, i) => {
      if (i === index) {
        return { ...exp, [field]: value }; // Update specific field for the experience at index
      }
      return exp; // Return unchanged experience
    });
    setExperiences(updatedExperiences);
  };

  return (
    <div>
      <p className="text-3xl font-semibold text-gray-900 mb-6">Experience</p>
      <div className="grid gap-4">
        {experiences.map((experience, index) => (
          <div key={index} className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-lg font-medium text-gray-800" htmlFor={`name-${index}`}>
                Company Name
              </label>
              <input
                type="text"
                id={`name-${index}`}
                placeholder="Enter Company Name"
                value={experience.companyName}
                onChange={(e) => handleExperienceChange(index, "companyName", e.target.value)}
                className="bg-white text-gray-900 p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-800 transition duration-300"
                required
              />
            </div>
            <div className="grid gap-2">
              <label className="text-lg font-medium text-gray-800" htmlFor={`position-${index}`}>
                Position
              </label>
              <input
                type="text"
                id={`position-${index}`}
                placeholder="Enter Position"
                value={experience.position}
                onChange={(e) => handleExperienceChange(index, "position", e.target.value)}
                className="bg-white text-gray-900 p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-800 transition duration-300"
                required
              />
            </div>
            <div className="flex gap-6">
              <div className="w-1/2">
                <p className="text-lg font-medium text-gray-800">Start Date</p>
                <input
                  type="date"
                  value={experience.startDate}
                  onChange={(e) => handleExperienceChange(index, "startDate", e.target.value)}
                  className="bg-white text-gray-900 p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-800 transition duration-300"
                  required
                />
              </div>
              <div className="w-1/2">
                <p className="text-lg font-medium text-gray-800">End Date</p>
                <input
                  type="date"
                  value={experience.endDate}
                  onChange={(e) => handleExperienceChange(index, "endDate", e.target.value)}
                  className="bg-white text-gray-900 p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-800 transition duration-300"
                  required
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={experience.currentlyWorking}
                onChange={() => handleExperienceChange(index, "currentlyWorking", !experience.currentlyWorking)}
                className="checkbox checkbox-sm text-gray-700 focus:ring-2 focus:ring-gray-600"
              />
              <p className="text-gray-700 text-sm font-medium">
                Currently working here
              </p>
            </div>
            <textarea
              placeholder="Job Description"
              value={experience.jobDescription}
              onChange={(e) => handleExperienceChange(index, "jobDescription", e.target.value)}
              className="bg-white text-gray-900 p-3 border border-gray-300 rounded-lg shadow h-24 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-800 transition duration-300"
              required
            />
          </div>
        ))}
        <button
          onClick={handleAddExperience}
          className="bg-gray-900 hover:bg-gray-700 text-white p-3 rounded-lg shadow w-full font-medium transition duration-200"
        >
          + Add Experience
        </button>
      </div>
    </div>
  );
};

export default Experience;
