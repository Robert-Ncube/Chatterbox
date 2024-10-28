import React from "react";
import GenderCheck from "./GenderCheck";

const SignUp = () => {
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

        <form className="mt-6 w-full p-4">
          <div className="">
            <label className="label p-2 flex flex-col items-start gap-2">
              <span className="text-base label-text text-white">Full Name</span>
              <input
                type="text"
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
                className="input w-full input-bordered h-10"
                placeholder="Confirm your password..."
              />
            </label>
          </div>

          <div className="flex items-center justify-center my-2">
            <GenderCheck />
          </div>

          <div className="flex flex-col gap-4 justify-center items-center mt-6">
            <button className="button w-fit font-bold py-2 px-4 rounded-lg text-white bg-blue-500 hover:bg-blue-400 transition duration-300">
              SignUp
            </button>
            <p className="text-slate-400">
              Already have an account?{" "}
              <a href="#" className="text-md text-blue-500 hover:text-blue-400">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

/*STARTER CODE FOR THIS FILE
import React from "react";
import GenderCheck from "./GenderCheck";

const SignUp = () => {
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

        <form className="mt-6 w-full p-4">
          <div className="">
            <label className="label p-2 flex flex-col items-start gap-2">
              <span className="text-base label-text text-white">Full Name</span>
              <input
                type="text"
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
                className="input w-full input-bordered h-10"
                placeholder="Confirm your password..."
              />
            </label>
          </div>

          <div className="flex items-center justify-center my-2">
            <GenderCheck />
          </div>

          <div className="flex flex-col gap-4 justify-center items-center mt-6">
            <button className="button w-fit font-bold py-2 px-4 rounded-lg text-white bg-blue-500 hover:bg-blue-400 transition duration-300">
              SignUp
            </button>
            <p className="text-slate-400">
              Already have an account?{" "}
              <a href="#" className="text-md text-blue-500 hover:text-blue-400">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
*/
