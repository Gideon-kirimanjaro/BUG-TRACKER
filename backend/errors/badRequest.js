const { CustomError } = require("./errors");
const { StatusCodes } = require("http-status-codes");
class badRequest extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
module.exports = { badRequest };
