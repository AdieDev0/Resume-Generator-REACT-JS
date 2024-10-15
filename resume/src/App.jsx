import React, { useState } from "react";
import Body from "./Components/Body";
import Personal from "./Components/Personal";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import LivePreview from "./Components/LivePreview"; // New Component for Live Preview

const App = () => {
  const [activeTab, setActiveTab] = useState("Personal");

  // State to store the input data for the resume
  const [resumeData, setResumeData] = useState({
    personal: {
      name: "",
      email: "",
    },
    experience: "",
    education: "",
    skills: "",
    project: "",
  });

  // Function to handle updating data from the child components
  const handleDataChange = (section, data) => {
    setResumeData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };

  const tabs = ["Personal", "Experience", "Education", "Skills", "Project"];

  return (
    <div className="flex justify-between px-32 py-20 bg-white w-full h-auto">
      {/* Left side: Tabs and input components */}
      <div className="w-1/2">
        <Body />

        <div role="tablist" className="tabs tabs-lifted flex mt-10">
          {tabs.map((tab) => (
            <a
              key={tab}
              role="tab"
              onClick={() => setActiveTab(tab)}
              className={`tab ${
                activeTab === tab ? "tab-active bg-black text-white font-semibold" : ""
              }`}
            >
              {tab}
            </a>
          ))}
        </div>

        {/* Box for displaying active tab content */}
        <div className="border-l border-r border-b border-black rounded-bl-xl rounded-br-xl w-[415px] h-auto p-5">
          {activeTab === "Personal" && (
            <Personal data={resumeData.personal} onChange={(data) => handleDataChange("personal", data)} />
          )}
          {activeTab === "Experience" && (
            <Experience data={resumeData.experience} onChange={(data) => handleDataChange("experience", data)} />
          )}
          {activeTab === "Education" && (
            <Education data={resumeData.education} onChange={(data) => handleDataChange("education", data)} />
          )}
          {activeTab === "Skills" && (
            <Skills data={resumeData.skills} onChange={(data) => handleDataChange("skills", data)} />
          )}
          {activeTab === "Project" && (
            <Project data={resumeData.project} onChange={(data) => handleDataChange("project", data)} />
          )}
        </div>
      </div>

      {/* Right side: Live preview */}
      <div className="w-1/2">
        <LivePreview resumeData={resumeData} />
      </div>
    </div>
  );
};

export default App;
