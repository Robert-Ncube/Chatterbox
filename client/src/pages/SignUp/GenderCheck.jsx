import React from "react";

const GenderCheck = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="bg-slate-100 inline-flex p-2 rounded-lg">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            name="gender"
            value="male"
            checked={selectedGender === "male"}
            onChange={(e) => onCheckboxChange(e.target.value)}
            className="checkbox border-slate-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            name="gender"
            value="female"
            checked={selectedGender === "female"}
            onChange={(e) => onCheckboxChange(e.target.value)}
            className="checkbox border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheck;
