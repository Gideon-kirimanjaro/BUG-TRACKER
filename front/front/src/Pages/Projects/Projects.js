import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Tables from "../../components/ui/Tables";
import AuthContext from "../../Store/Auth";
import ProjectHeaders from "./ProjectHeaders/ProjectHeaders";

const Projects = () => {
  const ctx = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleDefaultClose = () => {
    setShow(false);
  };

  const handleClose = async () => {
    if ((ctx.projectTitle !== "") & (ctx.projectDescription !== "")) {
      try {
        await axios
          .post("http://localhost:4500/api/v1/bugs/projects", {
            projectTitle: ctx.projectTitle,
            projectDescription: ctx.projectDescription,
            projectMembers: ctx.checked,
          })

          .then(
            ctx.setModalErrors({
              state: false,
            })
          )
          .then(
            ctx.setSuccessText({
              successState: true,
              successMessage: "Project added successfully",
            })
          )
          .then(
            ctx.setProjectTitle(""),
            ctx.setProjectDescription(""),
            ctx.setChecked([])
          )
          .then(ctx.setProjectId());
      } catch (error) {}
    } else {
      ctx.setModalErrors({
        state: true,
        message: "cannot post empty fields!",
      });
    }
  };
  const handleShow = async () => {
    setShow(true);
    ctx.setModalErrors({ state: false });
    ctx.setSuccessText({ successState: false });
  };

  return (
    <div>
      <div className="card  ">
        <div className="card-body">
          <ProjectHeaders
            title={"projects"}
            btnTitle={"Add Project"}
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
            project={true}
            defaultClose={handleDefaultClose}
          />
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Projects;
