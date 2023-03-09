const express = require("express");
const {
  getBug,
  dashBoard,
  signIn,
  register,
  postProject,
  getProjects,
  getProject,
  updateProject,
  addMember,
  getMembers,
  getProjectMembers,
  deleteProjectMembers,
  updateTickets,
  getTickets,
  getTicket,
} = require("../controller/controller");
const { authMiddle } = require("../middleware/auth");
const router = express.Router();

router.get("/", getBug);
router.post("/logIn", signIn);
router.post("/register", register);
router.get("/dashBoard", authMiddle, dashBoard);
router.post("/projects", postProject);
router.get("/projects", getProjects);
router.get("/projects/:id", getProject);
router.patch("/project/:id", updateProject);
router.post("/members", addMember);
router.get("/members", getMembers);
router.get("/projects/:id/members", getProjectMembers);
router.delete("/projects/:id/members/:key", deleteProjectMembers);
router.patch("/projects/:id/tickets", updateTickets);
router.get("/projects/:id/tickets", getTickets);
router.get("/projects/:id/tickets/:key", getTicket);

module.exports = { router };
