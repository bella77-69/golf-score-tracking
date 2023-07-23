import React from 'react';

const ScorecardOverview = ({ scorecards }) => {
  return (
    <div className="scorecard-overview">
      <h2>Scorecard Overview</h2>
      {scorecards.map((scorecard) => (
        <div key={scorecard.id} className="scorecard-item">
          <p>Course: {scorecard.course}</p>
          <p>Date: {scorecard.date}</p>
          <p>Score: {scorecard.score}</p>
          {/* Add the visual indicator based on the score */}

          
        </div>
      ))}
    </div>
  );
};

export default ScorecardOverview;