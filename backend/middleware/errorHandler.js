//invoke custom error

const { CustomError } = require("../errors/errors");

// return error based on statuscode
const errorMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).send("Error accessing the route");
};
module.exports = { errorMiddleware };
