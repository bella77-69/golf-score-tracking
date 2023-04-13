const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users.controller");

//get all users
router.get("/", usersController.getAllUsers);

// get user by ID
router.get("/:id", usersController.getUserByID);

// // get user by username
// router.get("/:username", usersController.getUserByUserName);

// create new user
router.post("/", usersController.createNewUser);

// update user
router.put("/:id", usersController.updateUser);

// delete user
router.delete("/:id", usersController.deleteUser);

module.exports = router;
