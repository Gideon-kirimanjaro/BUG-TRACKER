const { CustomError } = require("../errors/errors");
const jwt = require("jsonwebtoken");
const { unauthenticated } = require("../errors");
const authMiddle = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("bearer ")) {
    throw new CustomError("TOKEN NOT FOUND", 401);
  }

  try {
    const token = authHeader.split(" ")[1];
    const decode = await jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decode;
    next();
  } catch (error) {
    //throw CustomError("NOT AUHTORIZED TO ACCESS THIS ROUTE", 401);
    throw new unauthenticated("NOT AUHTORIZED TO ACCESS THIS ROUTE");
  }
};
module.exports = { authMiddle };
