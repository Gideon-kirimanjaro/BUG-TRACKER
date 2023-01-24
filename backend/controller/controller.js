const jwt = require("jsonwebtoken");
const { badRequest } = require("../errors");
const { CustomError } = require("../errors/errors");
const { notFound } = require("../errors/notFound");
const Users = require("../model/userSchema");
const Projects = require("../model/projectSchema");
const Members = require("../model/membersSchema");
const getBug = (req, res) => {
  res.send("SOME ROUTE");
};
const signIn = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new badRequest("fields cannot be empty");
  } else {
    Users.findOne({ email: email, password: password }).then((user) => {
      if (user) {
        const id = user._id;
        const token = jwt.sign(
          { id: id, name: user.userName, email: user.email },
          process.env.JWT_TOKEN,
          {
            expiresIn: "30d",
          }
        );
        return res.json({
          message: "User Found",
          token,
        });
      } else {
        return res.json({
          message: "USER NOT FOUND",
        });
        // throw new notFound("user Not Found, Register");
      }
    });
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
  return res.json({
    message: "welcome user",
    data: req.user.name,
  });
};
const postProject = async (req, res) => {
  const { projectTitle, projectDescription } = req.body;
  if (projectTitle && projectDescription) {
    const project = await Projects.create(req.body);
    return res.status(200).json({
      message: "Project created",
      data: project,
    });
  }
  if (!projectTitle) {
    throw new badRequest("project title is required");
  }
  if (!projectDescription) {
    throw new badRequest("project description is required");
  }
};
const getProjects = async (req, res) => {
  try {
    const projects = await Projects.find({});
    return res.status(200).json({
      data: projects,
    });
  } catch (error) {
    throw new notFound("No projects found");
  }
};
const getProject = async (req, res) => {
  let { id } = req.params;
  await Projects.findOne({ _id: id })
    .then((project) => {
      if (project) {
        return res.json({
          data: project,
        });
      }
      if (!project) {
        throw new badRequest("Project does not exist");
      }
    })
    .catch((err) => {
      throw new badRequest("bad request");
    });
};
const updateProject = (req, res) => {
  const { id } = req.params;
  return res.json({
    id: id,
    data: req.body,
  });
};
const addMember = (req, res) => {
  const { name, email, phone } = req.body;
  if (name && email && phone) {
    Members.create({ name: name, email: email, phone: phone }).then(
      (member) => {
        return res.json({
          data: member,
        });
      }
    );
  } else {
    throw new badRequest("All fields must be filled");
  }
};
const getMembers = async (req, res) => {
  await Members.find({}).then((member) => {
    return res.json({
      data: member,
    });
  });
};
module.exports = {
  getBug,
  signIn,
  register,
  dashBoard,
  postProject,
  getProjects,
  getProject,
  updateProject,
  addMember,
  getMembers,
};
