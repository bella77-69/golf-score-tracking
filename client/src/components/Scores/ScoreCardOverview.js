import React from 'react';

const ScorecardOverview = ({ scorecards }) => {
  console.log(scorecards);
  return (
    <div className="scorecard-overview">
      <h2>Scorecard Overview</h2>
      {scorecards.map((scorecard) => (
        <div key={scorecard.course_id} className="scorecard-item">
          <p>Course: {scorecard.course_id}</p>
          <p>Date: {scorecard.date}</p>
          <p>Score: {scorecard.score}</p>
          <p>User Id: {scorecard.user_id}</p>

          
        </div>
      ))}
    </div>
  );
};

export default ScorecardOverview;