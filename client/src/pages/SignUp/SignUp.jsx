import React, { useState } from "react";
import GenderCheck from "./GenderCheck";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signUp } = useSignUp();

  const handleGender = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signUp(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-[30rem] mx-auto gap-4">
      <div className="w-fit p-6 rounded-lg shadow-sm shadow-black bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-5xl text-semibold uppercase lilita text-center text-blue-500">
          Chatter-Box
        </h1>
      </div>
      <div className="w-full flex flex-col items-center p-4 rounded-lg shadow-sm shadow-black bg-slate-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
        <h1 className="text-3xl font-bold text-center text-gray-600 bg-slate-50 bg-opacity-40 inline-flex py-1 px-2 rounded-2xl">
          Sign Up
        </h1>

        <form className="mt-6 w-full p-4" onSubmit={handleSubmit}>
          <div className="">
            <label className="label p-2 flex flex-col items-start gap-2">
              <span className="text-base label-text text-white">Full Name</span>
              <input
                type="text"
                value={inputs.fullname}
                onChange={(e) =>
                  setInputs({ ...inputs, fullname: e.target.value })
                }
                className="input w-full input-bordered h-10"
                placeholder="eg: John Doe"
              />
            </label>
          </div>
          <div className="">
            <label className="label p-2 flex flex-col items-start gap-2">
              <span className="text-base label-text text-white">Username</span>
              <input
                type="text"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
                className="input w-full input-bordered h-10"
                placeholder="eg: Jonny"
              />
            </label>
          </div>
          <div className="">
            <label className="label p-2 flex flex-col items-start gap-2">
              <span className="text-base label-text text-white">Email</span>
              <input
                type="email"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
                className="input w-full input-bordered h-10"
                placeholder="Enter your email..."
              />
            </label>
          </div>
          <div className="">
            <label className="label p-2 flex flex-col items-start gap-2">
              <span className="text-base label-text text-white">Password</span>
              <input
                type="password"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
                className="input w-full input-bordered h-10"
                placeholder="Enter your password..."
              />
            </label>
          </div>
          <div className="">
            <label className="label p-2 flex flex-col items-start gap-2">
              <span className="text-base label-text text-white">
                Confirm Password
              </span>
              <input
                type="password"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
                className="input w-full input-bordered h-10"
                placeholder="Confirm your password..."
              />
            </label>
          </div>

          <div className="flex items-center justify-center my-2">
            <GenderCheck
              onCheckboxChange={handleGender}
              selectedGender={inputs.gender}
            />
          </div>

          <div className="flex flex-col gap-4 justify-center items-center mt-6">
            <button
              type="submit"
              disabled={loading}
              className="button w-fit font-bold py-2 px-4 rounded-lg text-white bg-blue-500 hover:bg-blue-400 transition duration-300"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "SignUp"
              )}
            </button>
            <p className="text-slate-400">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-md text-blue-500 hover:text-blue-400"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
