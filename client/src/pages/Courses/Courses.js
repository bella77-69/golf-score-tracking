/*  
using a functional component to display the courses
also using the useEffect hook to fetch the courses from the api
users can also search for a golf course by name


*/

import React, { useState, useEffect } from "react";

function Courses(props) {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFilteredCourses(
      courses.filter((course) => {
        return course.location.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, courses]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <h1 className="text-center">Courses</h1>
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Par</th>
                <th>Rating</th>
                <th>Slope</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course) => (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>{course.location}</td>
                  <td>{course.par}</td>
                  <td>{course.rating}</td>
                  <td>{course.slope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Courses;
