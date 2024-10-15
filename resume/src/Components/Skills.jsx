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
  // State to track which skill is being edited
  const [editingIndex, setEditingIndex] = useState(null);

  // Function to handle adding or updating a skill
  const handleSkillChange = () => {
    if (newSkill) {
      if (editingIndex !== null) {
        // Update existing skill
        const updatedSkills = skills.map((skill, index) =>
          index === editingIndex ? newSkill : skill
        );
        setSkills(updatedSkills);
        setEditingIndex(null); // Reset editing index
      } else if (!skills.includes(newSkill)) {
        // Add new skill if it doesn't exist
        setSkills([...skills, newSkill]);
      }
      setNewSkill(''); // Clear the input field
    }
  };

  // Function to handle clicking on a skill
  const handleSkillClick = (index) => {
    setNewSkill(skills[index]); // Set input to the skill being edited
    setEditingIndex(index); // Set the editing index
  };

  return (
    <div className='h-[330px]'>
      <h2 className="text-3xl font-semibold text-black mb-6">Skills</h2>
      {/* Display skills as clickable tags */}
      <div className="flex flex-wrap mb-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            onClick={() => handleSkillClick(index)} // Add click handler
            className="bg-gray-200 text-black rounded-full px-3 py-1 text-sm mr-2 mb-2 cursor-pointer hover:bg-gray-300"
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
          placeholder={editingIndex !== null ? "Edit skill" : "Add a new skill"}
          className="bg-white text-black p-3 border border-gray-400 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition duration-300"
        />
        <button
          onClick={handleSkillChange}
          className="bg-black hover:bg-gray-800 text-white p-3 rounded-r-lg shadow transition duration-200"
        >
          {editingIndex !== null ? "Update Skill" : "+ Add Skill"}
        </button>
      </div>
    </div>
  );
};

export default Skills;
