import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

const Profile = () => {
  const [bio, setBio] = useState('This is my bio.');
  const [profilePicture, setProfilePicture] = useState('/default_profile.png');
  const [imagePreview, setImagePreview] = useState(profilePicture);
  const [isEditing, setIsEditing] = useState(false);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBioChange = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[url('/background.png')] bg-cover bg-center">
      <div className="bg-white bg-opacity-65 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-[#3e7857] mb-6 text-center"> Profile</h2>
        
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Profile"
              className="rounded-full w-32 h-32 border-4 border-[#3e7857] mb-4"
            />
            <label htmlFor="file-upload" className="absolute bottom-2 right-2 cursor-pointer">
              <FaCamera className="text-[#3e7857] text-4xl bg-white rounded-full border border-[#feffff] p-1" />
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          <h3 className="text-2xl font-semibold text-[#3e7857]">User123</h3>
          <p className="text-xl text-gray-700 ">Male</p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-800 text-left mb-2">Bio:</label>
          {!isEditing ? (
            <div className="w-full px-4 py-2 border border-[#3e7857] rounded bg-white text-gray-700">
              <p>{bio}</p>
            </div>
          ) : (
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              onKeyDown={handleBioChange}
              className="w-full px-4 py-2 border border-[#3e7857] rounded focus:outline-none focus:ring-2 focus:ring-[#3e7857]"
              rows="3"
              autoFocus
            />
          )}
        </div>

        <div className="flex justify-end">
          <button
            className="bg-[#3e7857] text-white font-semibold py-2 px-4 rounded hover:bg-[#285846] transition duration-300"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

