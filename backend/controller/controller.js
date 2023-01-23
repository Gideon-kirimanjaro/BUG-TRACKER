const jwt = require("jsonwebtoken");
const { badRequest } = require("../errors");
const { CustomError } = require("../errors/errors");
const Users = require("../model/userSchema");
const getBug = (req, res) => {
  res.send("SOME ROUTE");
};
const signIn = (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    Users.findOne({ email: email, password: password }).then((user) => {
      const token = jwt.sign({ user }, process.env.JWT_TOKEN, {
        expiresIn: "30days",
      });
      res.send({ token: token });
    });
  } else {
    return res.send("User Does not exist");
  }
  if (!email || !password) {
    // throw new CustomError("fields cannot be empty", 400);
    throw new badRequest("fields cannot be empty");
  }
};
const register = (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName) {
    throw new badRequest("userName must be present");
  }
  if (!email) {
    throw new badRequest("email must be present");
  }
  if (!password) {
    throw new badRequest("password must be present");
  }
  Users.findOne({ email: email }).then((user) => {
    if (user) {
      return res.json("EMAIL ALREADY EXISTS");
    } else {
      const newUser = new Users({
        userName: userName,
        email: email,
        password: password,
      });
      newUser.save();
      return res.status(200).json("SUCCESFULLY REGISTERED");
    }
  });
};
const dashBoard = (req, res) => {
  res.send(req.user);
};
module.exports = { getBug, signIn, register, dashBoard };
