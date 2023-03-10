import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import AuthContext from "../../Store/Auth";
import { Button } from "./StyledButton";

export default function Tables({ data }) {
  const ctx = React.useContext(AuthContext);
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
          {data &&
            data.map((project) => (
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
                  <Button
                    key={project._id}
                    onClick={() => {
                      ctx.setProjectId(project._id);
                      ctx.setKey(project._id);
                    }}
                  >
                    view
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
