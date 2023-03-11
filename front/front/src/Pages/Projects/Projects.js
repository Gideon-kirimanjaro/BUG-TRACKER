import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Tables from "../../components/ui/Tables";
import AuthContext from "../../Store/Auth";
import ProjectHeaders from "./ProjectHeaders/ProjectHeaders";

const Projects = () => {
  const ctx = useContext(AuthContext);
  const fetchProjects = async () => {
    await axios
      .get("http://localhost:4500/api/v1/bugs/projects")
      .then((response) => {
        ctx.setProjectData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchMembers = async () => {
    await axios
      .get("http://localhost:4500/api/v1/bugs/members")
      .then((response) => {
        ctx.setMembers(response.data.data);
        console.log(ctx.members);
      });
  };
  useEffect(() => {
    fetchProjects();
    fetchMembers();
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = async () => {
    if ((ctx.projectTitle !== "") & (ctx.projectDescription !== "")) {
      try {
        await axios
          .post("http://localhost:4500/api/v1/bugs/projects", {
            projectTitle: ctx.projectTitle,
            projectDescription: ctx.projectDescription,
            projectMembers: ctx.checked,
          })
          .then((response) => {
            console.log("<<<<<>>>>>", response);
          })
          .then(setShow(false));
      } catch (error) {}
    } else {
      alert("cannot post epmty fields");
      setShow(false);
    }
  };
  const handleShow = async () => {
    setShow(true);
  };
  console.log("<<<>>", ctx.checked);
  const addProject = () => {};
  return (
    <div>
      <div className="card  ">
        <div className="card-body">
          {" "}
          <ProjectHeaders
            title={"projects"}
            btnTitle={"Add Project"}
            clickEvent={addProject}
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
            project={true}
          />
          <Tables data={ctx.projectData} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
