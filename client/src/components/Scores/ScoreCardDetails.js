import React from 'react';

const ScorecardDetails = ({ selectedScorecard }) => {
  if (!selectedScorecard) {
    return <div>Please select a scorecard from the overview to view details.</div>;
  }

  const { courseName, date, score, location, holeScores, putts, fairwaysHit, greensInRegulation } = selectedScorecard;

  return (
    <div className="scorecard-details">
      <h2>Scorecard Details</h2>
      <p>Course: {courseName}</p>
      <p>Location: {location}</p>
      <p>Date: {date}</p>
      <p>Score: {score}</p>
      <p>Putts: {putts}</p>
      <p>Fairways Hit: {fairwaysHit}</p>
      <p>Greens in Regulation: {greensInRegulation}</p>
      <p>Hole Scores: {holeScores}</p>
      
    </div>
  );
};

export default ScorecardDetails;