import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AuthContext from "../../Store/Auth";
import { Button } from "./StyledButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Tables() {
  const ctx = React.useContext(AuthContext);
  const navigate = useNavigate();
  const deleteProject = async (id) => {
    ctx.setProjectId(id);
    await axios
      .delete(`http://localhost:4500/api/v1/bugs/projects/${id}`)
      .then(alert("Project Deleted"));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Contributors</TableCell>
            <TableCell align="center">View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ctx.projectData &&
            ctx.projectData.map((project) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {project.projectTitle}
                </TableCell>
                <TableCell align="center">
                  {project.projectDescription}
                </TableCell>
                <TableCell align="center">
                  {project.projectMembers &&
                    project.projectMembers.map((member) => {
                      return member.name;
                    })}
                </TableCell>
                <TableCell align="center">
                  <div className="d-flex">
                    <Button
                      key={project._id}
                      onClick={() => {
                        navigate(`/auth/dashboard/projects/${project._id}`);
                      }}
                    >
                      view
                    </Button>
                    <Button
                      key={project._id}
                      onClick={() => {
                        deleteProject(project._id);
                      }}
                    >
                      delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
