const CourseModel = require("../models/courses.model");

// get all courses
exports.getAllCourses = (req, res) => {
  CourseModel.getAllCourses((err, course) => {
    if (err) res.send(err);
    res.send(course);
  });
};

// get course by location
exports.getCourseByLocation = (req, res) => {
  CourseModel.getCourseByLocation(req.params.location, (err, course) => {
    if (err) res.send(err);
    res.send(course);
  });
};
  
// get course by par
exports.getCourseByPar = (req, res) => {
  CourseModel.getCourseByPar(req.params.par, (err, course) => {
    if (err) res.send(err);
    res.send(course);
  });
};

// create new course
  exports.createNewCourse = (req, res) => {
    const courseReqData = new CourseModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      CourseModel.createNewCourse(courseReqData, (err, course) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Course Created Successfully",
          data: course.insertId,
        });
      });
    }
  };
  
// get course by ID  for Update
  exports.getCourseByID = (req, res) => {
    CourseModel.getCourseByID(req.params.id, (err, course) => {
      if (err) res.send(err);
     res.send(course);
    });
};
  
// update course
  exports.updateCourse = (req, res) => {
    const courseReqData = new CourseModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      CourseModel.updateCourse(
        req.params.id,
        courseReqData,
        (err, course) => {
          if (err) res.send(err);
          res.json({ status: true, message: "Course updated Successfully" });
        }
      );
    }
};
  
// delete course
  exports.deleteCourse= (req, res) => {
    CourseModel.deleteCourse(req.params.id, (err, course) => {
      if (err) res.send(err);
      res.json({ success: true, message: "Course deleted successfully!" });
    });
};