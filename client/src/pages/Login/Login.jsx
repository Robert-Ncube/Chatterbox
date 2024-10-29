import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login({ email, password });
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
          Login
        </h1>

        <form onSubmit={handleSubmit} className="mt-6 w-full p-4">
          <div className="">
            <label className="label p-2 flex flex-col items-start gap-2">
              <span className="text-base label-text text-white">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input w-full input-bordered h-10"
                placeholder="Enter your password..."
              />
            </label>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center mt-6">
            <button
              type="submit"
              className="button w-fit font-bold py-2 px-4 rounded-lg text-white bg-blue-500 hover:bg-blue-400 transition duration-300"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>

            <p className="text-slate-400">
              {"Don't"} have an account?{" "}
              <Link
                to={"/signup"}
                className="text-md text-blue-500 hover:text-blue-400"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
