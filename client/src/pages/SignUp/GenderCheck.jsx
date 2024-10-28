import React from "react";

const GenderCheck = () => {
  return (
    <div className=" bg-slate-100 inline-flex p-2 rounded-lg">
      <div className="form-control">
        <label className="label gap-2">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            name="gender"
            value="male"
            className="checkbox border-slate-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            name="gender"
            value="female"
            className="checkbox border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheck;

/*STARTER CODE FOR THIS FILE
import React from "react";

const GenderCheck = () => {
  return (
    <div className=" bg-slate-100 inline-flex p-2 rounded-lg">
      <div className="form-control">
        <label className="label gap-2">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            name="gender"
            value="male"
            className="checkbox border-slate-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            name="gender"
            value="female"
            className="checkbox border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheck;
*/
