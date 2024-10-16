import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white bg-opacity-65 shadow-xl rounded-lg border-4 border-[#3e7857] p-10 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-3 text-[#3d7756]">
          Create an Account
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-lg font-semibold text-[#3e7857] mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border-2 border-[#3e7857] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#3e7857]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold text-[#3e7857] mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border-2 border-[#3e7857] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#3e7857]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold text-[#3e7857] mb-1" htmlFor="gender">
              Gender
            </label>
            <select
              className="w-full px-4 py-2 border-2 border-[#3e7857] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#3e7857]"
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold text-[#3e7857] mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border-2 border-[#3e7857] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#3e7857]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold text-[#3e7857] mb-1" htmlFor="confirmpassword">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border-2 border-[#3e7857] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#3e7857]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3e7857] text-white font-semibold py-2 rounded-md hover:bg-[#aae7c5] hover:text-white transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-3 text-md text-black">
          Already have an account?{' '}
          <Link to="/login" className="text-[#3e7857] hover:underline font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
