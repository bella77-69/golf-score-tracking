import React from 'react';

const ScorecardDetails = ({ selectedScorecard }) => {
  if (!selectedScorecard) {
    return <div>Please select a scorecard from the overview to view details.</div>;
  }

  const { courseName, date, score, holeScores, putts, fairwaysHit, greensInRegulation } = selectedScorecard;

  return (
    <div className="scorecard-details">
      <h2>Scorecard Details</h2>
      <p>Course: {courseName}</p>
      <p>Date: {date}</p>
      <p>Score: {score}</p>
      {/* Display hole-by-hole scores, putts, fairways, greens, etc. */}
    </div>
  );
};

export default ScorecardDetails;