import React from 'react';

const LivePreview = ({ resumeData }) => {
  return (
    <div className="p-8 bg-gray-100 border border-gray-300 rounded-lg shadow-md max-w-2xl mx-auto">
      {/* Header Section */}
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 font-serif mb-1">{resumeData.personal.name || "John Doe"}</h1>
        <p className="text-lg text-gray-600">{resumeData.personal.email || "john@example.com"} | {resumeData.personal.phone || "(123) 456-7890"}</p>
        <p className="text-lg text-gray-600">{resumeData.personal.location || "City, Country"}</p>
      </div>

      {/* Summary Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 font-serif border-b pb-2">Summary</h2>
        <p className="text-gray-600 mt-2 text-justify">
          {resumeData.personal.summary || "A motivated professional with expertise in various domains, seeking to leverage skills to contribute to organizational success."}
        </p>
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 font-serif border-b pb-2">Experience</h2>
        <p className="text-gray-600 mt-2 text-justify">
          {resumeData.experience || "Your professional experience will appear here."}
        </p>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 font-serif border-b pb-2">Education</h2>
        <p className="text-gray-600 mt-2 text-justify">
          {resumeData.education || "Your educational background will appear here."}
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 font-serif border-b pb-2">Skills</h2>
        <p className="text-gray-600 mt-2 text-justify">
          {resumeData.skills || "Your skills will be highlighted here."}
        </p>
      </div>

      {/* Projects Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 font-serif border-b pb-2">Projects</h2>
        <p className="text-gray-600 mt-2 text-justify">
          {resumeData.project || "Your key projects and contributions will appear here."}
        </p>
      </div>
    </div>
  );
};

export default LivePreview;
