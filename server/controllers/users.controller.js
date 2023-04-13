const UserModel = require("../models/users.model");

// get all users
exports.getAllUsers = (req, res) => {
  UserModel.getAllUsers((err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};

// get user by username
exports.getUserByUserName = (req, res) => {
  UserModel.getUserByUserName(req.params.username, (err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};
  
// create new user
  exports.createNewUser = (req, res) => {
    const userReqData = new UserModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      UserModel.createNewUser(userReqData, (err, user) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "User Created Successfully",
          data: user.insertId,
        });
      });
    }
  };
  
// get user by ID  for Update
  exports.getUserByID = (req, res) => {
    UserModel.getUserByID(req.params.id, (err, user) => {
      if (err) res.send(err);
     res.send(user);
    });
};
  
// update user
  exports.updateUser = (req, res) => {
    const userReqData = new UserModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      UserModel.updateUser(
        req.params.id,
        userReqData,
        (err, user) => {
          if (err) res.send(err);
          res.json({ status: true, message: "User updated Successfully" });
        }
      );
    }
};
  
// delete user
  exports.deleteUser= (req, res) => {
    UserModel.deleteUser(req.params.id, (err, user) => {
      if (err) res.send(err);
      res.json({ success: true, message: "User deleted successfully!" });
    });
};