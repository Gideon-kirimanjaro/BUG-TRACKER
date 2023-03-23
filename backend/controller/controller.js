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
          process.env.JWT_TOKEN
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
  const { projectTitle, projectDescription, projectMembers, projectTickets } =
    req.body;
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
const deleteProject = async (req, res) => {
  const { id } = req.params;
  await Projects.deleteOne({ _id: id }).then((project) => {
    if (project) {
      res.json({
        msg: "project deleted",
      });
    } else {
      res.json({
        message: "Project not found",
      });
    }
  });
};
const updateProject = async (req, res) => {
  const { id } = req.params;
  const project = await Projects.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!project) {
    throw new badRequest("Project does not exist");
  }
  if (project) {
    console.log(">>>PROJECT", project);
    res.status(200).json({
      message: "Updated",
      data: project,
    });
  }
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
    if (!member) {
      throw new badRequest("There are no members at the moment");
    }
    return res.json({
      data: member,
    });
  });
};
const getProjectMembers = async (req, res) => {
  const { id } = req.params;
  const member = await Projects.findOne({ _id: id });
  if (!member) {
    throw new badRequest("NO MEMBERS AVAILABLE");
  }
  return res.status(200).json({
    members: member.projectMembers,
  });
};
const deleteProjectMembers = async (req, res) => {
  const { id } = req.params;
  const { key } = req.params;
  if (!id && !key) {
    throw new badRequest("Project not found");
  }
  await Projects.updateMany(
    { _id: id },
    { $pull: { projectMembers: { _id: key } } }
  ).then(() => {
    return res.status(200).json({
      message: "Member deleted",
    });
  });
};
///-------------------------------------------------TICKETS-------
const updateTickets = async (req, res) => {
  const { title, description, time, type, priority, status } = req.body;
  const { id } = req.params;
  if (title && description && time && type && priority && status) {
    const project = await Projects.findByIdAndUpdate(
      { _id: id },
      { $set: { projectTickets: [req.body] } },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!project) {
      throw new badRequest("Project not found");
    }
    return res.json({
      message: "success",
      data: project,
    });
  } else {
    return res.send("Fill all fields");
  }
};
const getTickets = async (req, res) => {
  const { id } = req.params;
  const tickets = await Projects.findOne({ _id: id });
  if (tickets) {
    return res
      .status(200)
      .json({ message: "Success", tickets: tickets.projectTickets });
  } else {
    return res.send("No tickets at the moment");
  }
};
const getTicket = async (req, res) => {
  const { key, id } = req.params;

  if (key) {
    await Projects.find({ _id: id }).then((ticket) => {
      return res.json({
        msg: "success",
        data: ticket,
      });
    });
  } else {
    res.send("There is an error");
  }
};
// const getUsers = async (req, res) => {
//   try {
//     const members = await Members.find({});
//     return res.status(200).json({
//       data: members,
//     });
//   } catch (error) {
//     throw new notFound("No projects found");
//   }
// };
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
  getProjectMembers,
  deleteProjectMembers,
  updateTickets,
  getTickets,
  getTicket,
  deleteProject,
};
