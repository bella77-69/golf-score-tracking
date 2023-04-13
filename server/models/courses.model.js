const dbConn = require('../config/db.config');

const Course = function (course) {
    this.name = course.name;
    this.location = course.location;
    this.par = course.par;
}

//get all course
Course.getAllCourses = (result) => {
  dbConn.query("SELECT * FROM courses", (err, res) => {
    if (err) {
      console.log("Error while fetching courses", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

//get course by location
Course.getCourseByLocation = (location, result) => {
  dbConn.query(
    "SELECT * FROM courses WHERE location = ?",
    location,
    (err, res) => {
      if (err) {
       console.log("Error while fetching data by location", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

//get course by par
Course.getCourseByPar = (par, result) => {
    dbConn.query(
      "SELECT * FROM courses WHERE par = ?",
      par,
      (err, res) => {
        if (err) {
         console.log("Error while fetching data by par", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
  };

// create new course
  Course.createNewCourse = (courseReqData, result) => {
    dbConn.query(
      "INSERT INTO courses SET ?",
      courseReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("New course created successfully");
          result(null, res);
        }
      }
    );
  };
  
//get course by ID for update
  Course.getCourseByID = (id, result) => {
    dbConn.query("SELECT * FROM courses WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching course by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
//update course
  Course.updateCourse = (id, courseReqData, result) => {
    dbConn.query(
      "UPDATE courses SET name=?, location=?, par=? WHERE id = ?",
      [courseReqData.name, courseReqData.location, courseReqData.par, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating course");
          result(null, err);
        } else {
          console.log("course updated successfully");
          result(null, res);
        }
      }
    );
};
  
//delete course
  Course.deleteCourse = (id, result) => {
    dbConn.query("DELETE from courses WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the course");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
module.exports = Course;
  