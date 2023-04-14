const LoginModel = require("../models/login.model");

// get all users list
exports.getAllUsers = (req, res) => {
  LoginModel.getAllUsers((err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};

// get user by email
exports.getUserByEmail = (req, res) => {
  LoginModel.getUserByEmail(req.params.email, (err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};
  
  // create new user
  exports.createNewUser = (req, res) => {
    const adminReqData = new LoginModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      LoginModel.createNewUser(adminReqData, (err, user) => {
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
    LoginModel.getUserByID(req.params.id, (err, user) => {
      if (err) res.send(err);
     res.send(user);
    });
  };
  
  // update user
  exports.updateUser = (req, res) => {
    const adminReqData = new LoginModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      LoginModel.updateUser(
        req.params.id,
        adminReqData,
        (err, user) => {
          if (err) res.send(err);
          res.json({ status: true, message: "user updated Successfully" });
        }
      );
    }
  };
  
  // delete user
  exports.deleteUser = (req, res) => {
    LoginModel.deleteUser(req.params.id, (err, user) => {
      if (err) res.send(err);
      res.json({ success: true, message: "User deleted successfully!" });
    });
  };