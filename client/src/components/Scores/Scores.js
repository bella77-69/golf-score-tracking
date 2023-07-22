import React, { useState } from 'react';

function Scores() {
  const [course, setCourse] = useState('');
  const [scores, setScores] = useState([]);

  const handleCourseChange = e => {
    setCourse(e.target.value);
  };

  const handleScoreChange = (holeNumber, e) => {
    const updatedScores = [...scores];
    updatedScores[holeNumber] = Number(e.target.value);
    setScores(updatedScores);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // You can perform additional logic or send the scores to an API here
    console.log('Submitted scores:', scores);
    // Reset the scores after submission
    setScores([]);
  };

  return (
    <div className="container">
      <h1 className="text-center">Scores</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Course:
          <input type="text" value={course} onChange={handleCourseChange} />
        </label>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Hole</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(18)].map((_, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="number"
                    min={0}
                    value={scores[index] || ''}
                    onChange={e => handleScoreChange(index, e)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Scores;