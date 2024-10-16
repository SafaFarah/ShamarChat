import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div 
        className="bg-white bg-opacity-65 shadow-xl rounded-lg border-4 border-[#3e7857] p-10 w-full max-w-sm h-130" 
      >
        <h2 className="text-2xl font-semibold text-center mb-8 text-[#3d7756]">
          Welcome to ShamarChat!
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-l font-semibold text-[#3e7857] mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"s
              id="username"
              className="w-full px-4 py-2 border-2  border-[#3e7857] rounded-md  bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#3e7857] focus:border-transparent"
              placeholder=""
            />
          </div>

          <div className="mb-6">
            <label className="block text-l font-semibold text-[#3e7857] mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border-2  border-[#3e7857] rounded-md bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#3e7857] focus:border-transparent"
              placeholder=""
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3e7857] text-[#fefffe] font-semibold py-2 rounded-md hover:bg-[#aae7c5] hover:text-white transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-md text-black">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#3e7857] hover:underline font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

