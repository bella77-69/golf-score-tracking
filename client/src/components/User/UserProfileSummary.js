import React from 'react';

const UserProfileSummary = ({ user }) => {
  // Check if the user data is not available yet
  if (!user) {
    return <div>Loading...</div>;
  }

  // Destructure the user object directly in the function parameter
  // Provide default values in case some data is missing or user is undefined
  const { username = '', id = '', profilePicture = '', roundsPlayed = 0, averageScore = 0, handicap = 0 } = user;

  return (
    <div className="user-profile-summary">
      <div className="profile-picture">
        <img src={profilePicture} alt="Profile" />
      </div>
      <div className="user-info">
        <h2>Id: {id}</h2>
        <h2>Username: {username}</h2>
        <p>Rounds Played: {roundsPlayed}</p>
        <p>Average Score: {averageScore}</p>
        <p>Handicap: {handicap}</p>
      </div>
    </div>
  );
};

export default UserProfileSummary;