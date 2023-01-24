const { CustomError } = require("../errors/errors");
const jwt = require("jsonwebtoken");
const { unauthenticated } = require("../errors");
const authMiddle = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    const data = jwt.verify(token, process.env.JWT_TOKEN);
    console.log("DATA>>>>>>", data);
    req.user = data;
    next();
  } else {
    throw new CustomError("TOKEN NOT FOUND", 401);
  }
};
module.exports = { authMiddle };
