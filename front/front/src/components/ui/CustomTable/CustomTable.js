import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProjectHeaders from "../../../Pages/Projects/ProjectHeaders/ProjectHeaders";

export default function CustomTable({
  th1,
  th2,
  th3,
  memberData,
  ticketData,
  addMember,
  addTicket,
}) {
  return (
    <TableContainer component={Paper}>
      <ProjectHeaders
        title={memberData ? "members" : "tickets"}
        btnTitle={memberData ? "add Member" : "add Ticket"}
        clickEvent={memberData ? addMember : addTicket}
      />
      <Table sx={{ maxWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{th1}</TableCell>
            <TableCell align="center">{th2}</TableCell>
            <TableCell align="center">{th3}</TableCell>
          </TableRow>
        </TableHead>
        {memberData ? (
          <TableBody>
            {memberData &&
              memberData.map((member) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {member.name}
                  </TableCell>
                  <TableCell align="center">{member.email}</TableCell>

                  <TableCell align="center">{member.phone}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        ) : (
          <TableBody>
            {ticketData &&
              ticketData.map((project) => (
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
                    <p>Some Functions</p>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}
