import React, { useState } from 'react';

const AddNewRound = () => {
    const [scores, setScores] = useState([]);
    const [course_id, setCourse_id] = useState('');
    const [user_id, setUser_id] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can perform additional logic or send the scores to an API here
      fetch('http://localhost:5000/scores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseId: course_id,
          userId: user_id,
          scores: scores,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success in submitting scores:', data);
          // Reset the form after successful submission
          setScores([]);
          setCourse_id('');
          setUser_id('');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  
      console.log('Submitted scores:', scores);
    };
  
    const handleCourseChange = (e) => {
      setCourse_id(e.target.value);
    };
  
    const handleUserChange = (e) => {
      setUser_id(e.target.value);
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
            <input type="text" value={course_id} onChange={handleCourseChange} required />
          </label>
          <label>
            User:
            <input type="text" value={user_id} onChange={handleUserChange} required />
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
                      onChange={(e) => handleScoreChange(index, e)}
                      required
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default AddNewRound;