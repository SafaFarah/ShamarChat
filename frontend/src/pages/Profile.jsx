import React from 'react';

const Profile = () => {


  return (
    <div>
      <h2>Profile</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Gender:</label>
          <input type="text" name="gender" />
        </div>
        <div>
          <label>Bio:</label>
          <input
            type="text"
            name="bio"
          />
        </div>
        <div>
          <label>Profile Picture:</label>
          <input
            type="text"
            name="profilePicture"
          />
        </div>
        <button type="submit">Save</button>
      </form>
      <div>
        <h3>Profile Picture Preview:</h3>
      </div>
    </div>
  );
};

export default Profile;
