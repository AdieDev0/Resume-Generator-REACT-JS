import React, { useState } from "react";

const Education = () => {
  const [educations, setEducations] = useState([
    {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      currentlyStudying: false,
      details: "",
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updatedEducations = [...educations];
    updatedEducations[index][name] = type === "checkbox" ? checked : value;
    setEducations(updatedEducations);
  };

  const handleAddEducation = () => {
    setEducations([
      ...educations,
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        currentlyStudying: false,
        details: "",
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle adding education logic (e.g., sending it to a server)
    console.log("Educations added:", educations);
    // Optionally reset educations after submission or keep it
  };

  return (
    <div>
      <p className="text-3xl font-semibold text-gray-900 mb-6">Education</p>
      <form onSubmit={handleSubmit}>
        {educations.map((education, index) => (
          <div key={index} className="mb-6">
            <div className="grid gap-2">
              <label className="text-lg font-medium text-gray-800" htmlFor={`school-${index}`}>
                School/University Name
              </label>
              <input
                type="text"
                id={`school-${index}`}
                name="school"
                value={education.school}
                onChange={(e) => handleChange(index, e)}
                placeholder="Enter School/University Name"
                className="bg-white text-gray-900 p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-800 transition duration-300"
                required
              />
            </div>
            <div className="grid gap-2">
              <label className="text-lg font-medium text-gray-800" htmlFor={`degree-${index}`}>
                Degree Program
              </label>
              <input
                type="text"
                id={`degree-${index}`}
                name="degree"
                value={education.degree}
                onChange={(e) => handleChange(index, e)}
                placeholder="Enter Degree Program"
                className="bg-white text-gray-900 p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-800 transition duration-300"
                required
              />
            </div>
            <div className="flex gap-6">
              <div className="w-1/2">
                <p className="text-lg font-medium text-gray-800">Start Date</p>
                <input
                  type="date"
                  name="startDate"
                  value={education.startDate}
                  onChange={(e) => handleChange(index, e)}
                  className="bg-white text-gray-900 p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-800 transition duration-300"
                  required
                />
              </div>
              <div className="w-1/2">
                <p className="text-lg font-medium text-gray-800">End Date</p>
                <input
                  type="date"
                  name="endDate"
                  value={education.endDate}
                  onChange={(e) => handleChange(index, e)}
                  className="bg-white text-gray-900 p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-800 transition duration-300"
                  required
                />
              </div>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <input
                type="checkbox"
                name="currentlyStudying"
                checked={education.currentlyStudying}
                onChange={(e) => handleChange(index, e)}
                className="checkbox checkbox-sm border-black/60x   text-gray-700 focus:ring-2 focus:ring-gray-600"
              />
              <p className="text-gray-700 text-sm font-medium">Currently studying here</p>
            </div>
            
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddEducation}
          className="bg-gray-900 hover:bg-gray-700 text-white p-3 rounded-lg shadow w-full font-medium transition duration-200 mb-4"
        >
          + Add Education
        </button>
        <button
          type="submit"
          className="bg-gray-900 hover:bg-gray-700 text-white p-3 rounded-lg shadow w-full font-medium transition duration-200"
        >
          Submit All Education
        </button>
      </form>
    </div>
  );
};

export default Education;
