const express = require("express");
const router = express.Router();

const coursesController = require("../controllers/courses.controller");

//get all courses
router.get("/", coursesController.getAllCourses);

// get course by ID
router.get("/:id", coursesController.getCourseByID);

// get by location
router.get("/:location", coursesController.getCourseByLocation);

// get by par
router.get("/:par", coursesController.getCourseByPar);

// create new course
router.post("/", coursesController.createNewCourse);

// update course
router.put("/:id", coursesController.updateCourse);

// delete course
router.delete("/:id", coursesController.deleteCourse);

module.exports = router;
