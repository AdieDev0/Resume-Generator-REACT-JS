import React, { useState } from 'react';

const Skills = () => {
  // State to hold the list of skills
  const [skills, setSkills] = useState([
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'Java',
    'HTML',
    'CSS',
    'SQL',
    'Git',
    'Agile',
    'PHP',
    'Laravel',
    'Vue.js',
    'Angular',
    'TypeScript',
  ]);

  // State to hold the new skill input value
  const [newSkill, setNewSkill] = useState('');

  // Function to handle adding a new skill
  const handleAddSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]); // Add new skill to the list
      setNewSkill(''); // Clear the input field
    }
  };

  return (
    <div className='h-[330px]'>
      <h2 className="text-3xl font-semibold text-black mb-6">Skills</h2>
      {/* Display skills as tags */}
      <div className="flex flex-wrap mb-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 text-black rounded-full px-3 py-1 text-sm mr-2 mb-2"
          >
            {skill}
          </span>
        ))}
      </div>
      {/* Input field for adding a new skill */}
      <div className="flex items-center">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add a new skill"
          className="bg-white text-black p-3 border border-gray-400 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition duration-300"
        />
        <button
          onClick={handleAddSkill}
          className="bg-black hover:bg-gray-800 text-white p-3 rounded-r-lg shadow transition duration-200"
        >
          + Add Skill
        </button>
      </div>
    </div>
  );
};

export default Skills;
