const dbConn = require('../config/db.config');

const Login = function (admin) {
    this.email = admin.email;
    this.password = admin.password;
}

//get all Guests
Login.getAllUsers = (result) => {
  dbConn.query("SELECT * FROM login", (err, res) => {
    if (err) {
      console.log("Error while fetching admin", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};


//get user by email
Login.getUserByEmail = (email, result) => {
  dbConn.query(
    "SELECT * FROM login WHERE email = ?",
    email,
    (err, res) => {
      if (err) {
       console.log("Error while fetching data by email", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

  // create new user
  Login.createNewUser = (adminReqData, result) => {
    dbConn.query(
      "INSERT INTO login SET ?",
      adminReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("Login user created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get user by ID for update
  Login.getUserByID = (id, result) => {
    dbConn.query("SELECT * FROM login WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching user by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update user
  Login.updateUser = (id, adminReqData, result) => {
    dbConn.query(
      "UPDATE login SET email=?, password=? WHERE id = ?",
      [adminReqData.email, adminReqData.password, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating user");
          result(null, err);
        } else {
          console.log("login user updated successfully");
          result(null, res);
        }
      }
    );
  };
  
  //delete user
  Login.deleteUser = (id, result) => {
    dbConn.query("DELETE from login WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the login user");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = Login;
  