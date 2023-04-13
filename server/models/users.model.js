const dbConn = require('../config/db.config');

const User = function (course) {
    this.username = course.username;
    this.password = course.password;
}

//get all users
User.getAllUsers = (result) => {
  dbConn.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("Error while fetching users", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

//get user by username
User.getUserByUserName = (username, result) => {
  dbConn.query(
    "SELECT * FROM users WHERE username = ?",
    username,
    (err, res) => {
      if (err) {
       console.log("Error while fetching users by username", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// create new user
User.createNewUser = (userReqData, result) => {
    dbConn.query(
      "INSERT INTO users SET ?",
      userReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("New users created successfully");
          result(null, res);
        }
      }
    );
  };
  
//get user by ID for update
User.getUserByID = (id, result) => {
    dbConn.query("SELECT * FROM users WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching users by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
//update user
User.updateUser = (id, userReqData, result) => {
    dbConn.query(
      "UPDATE users SET username=?, password=? WHERE id = ?",
      [userReqData.username, userReqData.password, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating users");
          result(null, err);
        } else {
          console.log("users updated successfully");
          result(null, res);
        }
      }
    );
};
  
//delete user
User.deleteUser = (id, result) => {
    dbConn.query("DELETE from users WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the users");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
module.exports = User;
  