const express = require("express");
const {
  getBug,
  dashBoard,
  signIn,
  register,
} = require("../controller/controller");
const { authMiddle } = require("../middleware/auth");
const router = express.Router();

router.get("/", getBug);
router.post("/signIn", signIn);
router.post("/register", register);
router.get("/dashBoard", authMiddle, dashBoard);
module.exports = { router };
