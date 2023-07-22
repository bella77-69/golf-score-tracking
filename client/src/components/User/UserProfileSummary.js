import React from 'react';

const UserProfileSummary = ({ user }) => {
  const { name, profilePicture, roundsPlayed, averageScore, handicap } = user;

  return (
    <div className="user-profile-summary">
      <div className="profile-picture">
        <img src={profilePicture} alt="Profile" />
      </div>
      <div className="user-info">
        <h2>{name}</h2>
        <p>Rounds Played: {roundsPlayed}</p>
        <p>Average Score: {averageScore}</p>
        <p>Handicap: {handicap}</p>
      </div>
    </div>
  );
};

export default UserProfileSummary;