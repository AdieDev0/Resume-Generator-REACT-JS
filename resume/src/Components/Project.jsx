import React from 'react';

const Project = () => {
  return (
    <div className='h-[330px]'>
      <h2 className="text-2xl font-semibold text-black mb-4">Add New Project</h2>
      <div className="grid gap-4">
        {/* Project Name Input */}
        <input
          id="projectName"
          placeholder="Project Name"
          className="bg-white text-black p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-gray-600 focus:border-gray-900 h-10 transition duration-300"
          required
        />
        
        {/* Project Description Textarea */}
        <textarea
          id="projectDescription"
          placeholder="Project Description"
          className="bg-white text-black p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-gray-600 focus:border-gray-900 h-28 resize-none transition duration-300"
          required
        />
        
        {/* Add Project Button */}
        <button className="bg-black hover:bg-gray-800 text-white p-3 rounded-lg shadow w-full font-medium transition duration-200 mb-4">
          + Add Project
        </button>
      </div>
    </div>
  );
};

export default Project;
