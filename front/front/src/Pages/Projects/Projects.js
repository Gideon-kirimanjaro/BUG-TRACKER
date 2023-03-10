import axios from "axios";
import React, { useEffect, useState } from "react";
import Tables from "../../components/ui/Tables";
import ProjectHeaders from "./ProjectHeaders/ProjectHeaders";

const Projects = () => {
  const [data, setData] = useState([]);
  const fetchProjects = async () => {
    await axios
      .get("http://localhost:4500/api/v1/bugs/projects")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div>
      <div className="card  ">
        <div className="card-body">
          {" "}
          <ProjectHeaders title={"projects"} btnTitle={"Add Project"} />
          <Tables data={data} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
