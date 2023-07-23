const dbConn = require('../config/db.config');

const Score = function (score) {
  this.user_id = score.user_id;
  this.course_id = score.course_id;
  this.score = score.score;  
  this.date = score.date;
};

//get all scores
Score.getAllScores = (result) => {
  dbConn.query("SELECT * FROM scores", (err, res) => {
    if (err) {
      console.log("Error while fetching scores", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

//get score by date
Score.getScoreByDate = (date, result) => {
  dbConn.query(
    "SELECT * FROM scores WHERE date = ?",
    date,
    (err, res) => {
      if (err) {
       console.log("Error while fetching score by date", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// create new score
Score.createNewScore = (scoreReqData, result) => {
  dbConn.query(
    "INSERT INTO scores SET ?",
    scoreReqData,
    (err, res) => {
      if (err) {
        console.log("Error while inserting data!");
        result(err, null);
      } else {
        console.log("New score created successfully");
        result(null, res.insertId);
      }
    }
  );
};
  
//get score by ID for update
Score.getScoreByID = (id, result) => {
    dbConn.query("SELECT * FROM scores WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching score by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
//update score
Score.updateScore = (id, scoreReqData, result) => {
    dbConn.query(
      "UPDATE scores SET user_id=?, course_id=?, score=?, date=?  WHERE id = ?",
      [scoreReqData.user_id, scoreReqData.course_id, scoreReqData.score, scoreReqData.date, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating score");
          result(null, err);
        } else {
          console.log("score updated successfully");
          result(null, res);
        }
      }
    );
};
  
//delete score
Score.deleteScore = (id, result) => {
    dbConn.query("DELETE from scores WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the score");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
module.exports = Score;
  