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
  useEffect(() => {
    fetchProjects();
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    axios.get("http://localhost:4500/api/v1/bugs/members").then((response) => {
      ctx.setMembers(response.data.data);
      console.log(ctx.members);
    });
    setShow(true);
  };
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
