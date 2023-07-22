import React, { useState } from 'react';

const AddNewRound = () => {
    const [scores, setScores] = useState([]);
    const [course, setCourse] = useState('');



  // Implement the form or button to add a new round with course name, date, score, putts, etc.
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional logic or send the scores to an API here
    fetch('/api/scores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            course: course,
            scores: scores,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success in submitting scores:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    console.log('Submitted scores:', scores);
    // Reset the scores after submission
    setScores([]);
    };

    const handleCourseChange = e => {
        setCourse(e.target.value);
    };

    const handleScoreChange = (holeNumber, e) => {
        const updatedScores = [...scores];
        updatedScores[holeNumber] = Number(e.target.value);
        setScores(updatedScores);
    };
    

  return (
    <div className="add-new-round">
      <h2>Add New Round</h2>
      {/* Form or button to add a new round */}
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
};

export default AddNewRound;