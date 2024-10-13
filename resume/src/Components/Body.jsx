import React from "react";

const Body = () => {
  return (
    <div className="w-full h-auto">
      <div className="grid gap-2">
        <p className="text-6xl font-Ubuntu font-bold bg-gradient-to-t from-[#343434] from-45% bg-clip-text text-transparent">
          Resume Generator
        </p>
        <p className="text-xl font-medium text-black/70">
          It only takes a few minutes to create a professional resume!
        </p>
      </div>

      {/* Box */}
      <div className="flex gap-5 py-10">
        {/* First Table */}
        <div role="tablist" className="tabs">
  {/* Tab 1 */}
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" defaultChecked />
  <div role="tabpanel" className="tab-content bg-white border-gray-300 rounded-lg p-6">
    {/* Personal Information Form */}
    <div className="border p-6 rounded-lg bg-gray-50">
      <p className="text-gray-800 text-3xl font-semibold mb-4">Personal Information</p>
      <div className="grid gap-6">
        {[
          { label: "Full Name", type: "text" },
          { label: "Email Address", type: "email" },
          { label: "Phone Number", type: "tel" },
          { label: "Github Profile", type: "url" }
        ].map(({ label, type }, index) => (
          <div key={index}>
            <label className="block text-gray-800 font-semibold mb-2" htmlFor={label.toLowerCase().replace(" ", "-")}>
              {label}
            </label>
            <input
              id={label.toLowerCase().replace(" ", "-")}
              type={type}
              placeholder={`Enter ${label}`}
              className="input input-bordered w-full bg-white"
              aria-label={label}
            />
          </div>
        ))}

        {/* Summary field */}
        <div>
          <label className="block text-gray-800 font-semibold mb-2" htmlFor="summary">
            Summary
          </label>
          <textarea
            id="summary"
            placeholder="Enter your summary"
            className="textarea textarea-bordered w-full h-32 bg-white"
            aria-label="Summary"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Tab 2 */}
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" />
  <div role="tabpanel" className="tab-content bg-white border-gray-300 rounded-lg p-6">
    Tab content 2 (Add any additional content here)
  </div>

  {/* Tab 3 */}
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
  <div role="tabpanel" className="tab-content bg-white border-gray-300 rounded-lg p-6">
    Tab content 3 (Add any additional content here)
  </div>
</div>


        {/* Second Table */}
      </div>
    </div>
  );
};

export default Body;
