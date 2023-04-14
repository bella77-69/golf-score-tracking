const express = require("express");
const router = express.Router();

const loginController = require("../controllers/login.controller");

//get all records
router.get("/", loginController.getAllUsers);

// get user by ID
router.get("/:id", loginController.getUserByID);

// // get ID for Update
router.get("/:email", loginController.getUserByEmail);

// // create new user
router.post("/", loginController.createNewUser);

// update user
router.put("/:id", loginController.updateUser);

// delete user
router.delete("/:id", loginController.deleteUser);

module.exports = router;
