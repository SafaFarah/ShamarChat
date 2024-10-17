import React, { useState } from 'react';
import { FaSearch, FaSignOutAlt, FaComments } from 'react-icons/fa';
import logoutUse from "../hooks/logoutUse.js"

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const { isLoading, logout } = logoutUse();

  const user = {
    username: 'User123',
    profilePicture: '/default_profile.png',
  };

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-opacity-70 bg-white border-r border-[#3e7857] p-6 flex flex-col justify-between shadow-lg">
        

        <div className="flex items-center mb-6 border-b border-[#3e7857] pb-4">
          <img
            src={user.profilePicture}
            alt="User's Avatar"
            className="rounded-full w-10 h-10 border-2 border-[#3e7857] mr-4"
          />
          <span className="text-[#3e7857] font-medium">{user.username}</span>
        </div>

       <div className="relative mb-6">
          <input
            type="text"
            className="w-full px-4 py-2 border-2 border-[#3e7857] rounded-full bg-white text-gray-700 focus:ring-2 focus:ring-[#3e7857] focus:outline-none"
            placeholder="Search..."
          />
          <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#3e7857]" />
        </div>

        <div className="space-y-4">

          <div className="border-b border-[#3e7857] py-2 flex items-center cursor-pointer" onClick={() => handleChatSelect('Chat with ...')}>
            <img
              src={user.profilePicture}
              alt="Chat Avatar"
              className="rounded-full w-10 h-10 border-2 border-[#3e7857] mr-4"
            />
            <span className="text-[#3e7857] font-medium hover:underline">
              Chat with ...
            </span>
          </div>
        </div>

        <button
          onClick={logout}
          className="w-full bg-[#3e7857] text-white font-semibold py-2 rounded-full flex items-center justify-center hover:bg-[#285846] transition duration-300 mt-auto"
        >
          {!isLoading ? (
            <>
              <FaSignOutAlt className="mr-2" /> Logout
            </>
          ) : (
            <span className="loading loading-spinner"></span>
          )}
        </button>
      </div>

      <div className="w-3/4 p-6 flex flex-col justify-between bg-transparent">
        {selectedChat ? (
          <>
            <div className="border-b pb-3 mb-4 flex items-center">
              <img
                src={user.profilePicture}
                alt="user's Avatar"
                className="rounded-full w-10 h-10 border-2 border-[#3e7857] mr-4"
              />
              <h2 className="text-xl font-semibold text-[#3e7857]">
                {selectedChat}
              </h2>
            </div>

            <div className="flex-grow overflow-y-auto space-y-4 bg-white bg-opacity-70 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="bg-white p-4 rounded-lg shadow-md border border-[#3e7857]">
                  <p className="text-gray-700">Hello! How are you?</p>
                  <span className="text-xs text-gray-500 block mt-1">10:30 AM</span>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-[#3e7857] text-white p-4 rounded-lg shadow-md max-w-xs">
                  <p>I'm good, thanks! How about you?</p>
                  <span className="text-xs text-gray-300 block mt-1">10:32 AM</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-3 mt-4">
              <input
                type="text"
                className="w-full px-4 py-2 border-2 border-[#3e7857] rounded-full bg-white text-gray-700 focus:ring-2 focus:ring-[#3e7857] focus:outline-none"
                placeholder="Type your message..."
              />
            </div>
          </>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center bg-white bg-opacity-100 rounded-lg p-4">
            <FaComments className="text-8xl text-[#3e7857] mb-6 animate-bounce" />
            <h2 className="text-3xl font-bold text-[#3e7857] mb-2">
              Select a chat to start messaging
            </h2>
            <p className="text-2xl text-[#64746b]">Click on a chat on the left to begin!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;

