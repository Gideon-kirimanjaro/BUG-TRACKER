import { Box, Stack } from "@mui/system";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../Store/Auth";
import CustomTable from "../ui/CustomTable/CustomTable";

const ProjectPage = ({ key }) => {
  const params = useParams();

  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:4500/api/v1/bugs/projects/${params.id}`)
      .then((data) => {
        setData(data.data.data);
      });
  }, []);

  return (
    <div>
      <h1>Single Project {data._id}</h1>
      <div className="d-md-flex justify-content-around">
        <div>
          <CustomTable
            th1={"name"}
            th2={"email"}
            th3={"phone"}
            memberData={data.projectMembers}
            addMember={() => {
              alert("PARADISE");
            }}
          />
        </div>
        <div>
          <CustomTable
            th1={"title"}
            th2="description"
            th3="author"
            ticketData={data.projectTickets}
            addTicket={() => {
              alert("WARZONE");
            }}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProjectPage;
