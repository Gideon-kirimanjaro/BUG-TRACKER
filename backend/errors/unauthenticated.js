const { CustomError } = require("./errors");
const { StatusCodes } = require("http-status-codes");
class unauthenticated extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
module.exports = { unauthenticated };
