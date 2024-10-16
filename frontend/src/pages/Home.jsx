import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/images/background.png")' }}>
      <div className="bg-white bg-opacity-65 p-12 rounded-lg shadow-lg text-center">
        <h1 className="text-5xl font-bold text-[#3e7857] mb-6">Welcome to ShamarChat!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with friends and start chatting in seconds.
        </p>

        <div className="mb-4">
          <Link to="/chat">
            <button className="bg-white text-[#3e7857] font-semibold py-3 px-8 rounded-full hover:bg-[#285846] transition duration-300 shadow-lg">
              Go to Chat
            </button>
          </Link>
        </div>

        <div className="space-x-4">
          <Link to="/login">
            <button className="bg-[#3e7857] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#285846] transition duration-300 shadow-lg">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-[#3e7857] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#285846] transition duration-300 shadow-lg">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
