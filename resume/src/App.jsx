import React, { useState } from "react";
import Body from "./Components/Body";

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
      {/* Box */}
      <div className="border-l border-r border-b border-black rounded-bl-xl rounded-br-xl w-[415px] h-auto">
        Hello
      </div>
    </div>
  );
};

export default App;
