import React, { useState } from "react";
import Body from "./Components/Body";
import Personal from "./Components/Personal";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Project from "./Components/Project";

const App = () => {
  const [activeTab, setActiveTab] = useState('Personal');

  const tabs = ['Personal', 'Experience', 'Education', 'Skills', 'Project'];

  return (
    <div className="px-32 py-20 bg-white w-full h-auto">
      <Body />

      <div role="tablist" className="tabs tabs-lifted flex mt-10">
        {tabs.map((tab) => (
          <a
            key={tab}
            role="tab"
            onClick={() => setActiveTab(tab)}
            className={`tab ${activeTab === tab ? 'tab-active bg-black text-white font-semibold' : ''}`}
          >
            {tab}
          </a>
        ))}
      </div>

      {/* Box for displaying active tab content */}
      <div className="border-l border-r border-b border-black rounded-bl-xl rounded-br-xl w-[415px] h-auto p-5">
        {activeTab === 'Personal' && <Personal />}
        {activeTab === 'Experience' && <Experience />}
        {activeTab === 'Education' && <Education />}
        {activeTab === 'Skills' && <Skills />}
        {activeTab === 'Project' && <Project />}
      </div>
    </div>
  );
};

export default App;
