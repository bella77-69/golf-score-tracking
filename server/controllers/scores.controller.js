const ScoreModel = require("../models/scores.model");

// get all scores
exports.getAllScores = (req, res) => {
  ScoreModel.getAllScores((err, score) => {
    if (err) res.send(err);
    res.send(score);
  });
};

// get score by date
exports.getScoreByDate = (req, res) => {
  ScoreModel.getScoreByDate(req.params.date, (err, score) => {
    if (err) res.send(err);
    res.send(score);
  });
};
  
exports.createNewScore = (req, res) => {
  const scoreReqData = new ScoreModel(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ success: false, message: "Please fill all fields" });
  } else {
    ScoreModel.createNewScore(scoreReqData, (err, score) => {
      if (err) {
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.json({
          status: true,
          message: "Score Created Successfully",
          data: score,
        });
      }
    });
  }
};
  
// get score by ID  for Update
  exports.getScoreByID = (req, res) => {
    ScoreModel.getScoreByID(req.params.id, (err, score) => {
      if (err) res.send(err);
     res.send(score);
    });
};
  
// update score
  exports.updateScore = (req, res) => {
    const scoreReqData = new ScoreModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      ScoreModel.updateScore(
        req.params.id,
        scoreReqData,
        (err, score) => {
          if (err) res.send(err);
          res.json({ status: true, message: "Score updated Successfully" });
        }
      );
    }
};
  
// delete score
  exports.deleteScore= (req, res) => {
    ScoreModel.deleteScore(req.params.id, (err, score)=> {
      if (err) res.send(err);
      res.json({ success: true, message: "Score deleted successfully!" });
    });
};