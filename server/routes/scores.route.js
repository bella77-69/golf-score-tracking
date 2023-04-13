const express = require("express");
const router = express.Router();

const scoresController = require("../controllers/scores.controller");

//get all scores
router.get("/", scoresController.getAllScores);

// get score by ID
router.get("/:id", scoresController.getScoreByID);

// get score by date
router.get("/:date", scoresController.getScoreByDate);

// create new score
router.post("/", scoresController.createNewScore);

// update score
router.put("/:id", scoresController.updateScore);

// delete score
router.delete("/:id", scoresController.deleteScore);

module.exports = router;
