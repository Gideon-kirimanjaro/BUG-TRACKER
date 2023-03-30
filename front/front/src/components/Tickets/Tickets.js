import { Box, Stack } from "@mui/material";
import React from "react";
import TicketsPage from "../../Pages/TicketsPage/TicketsPage";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Tickets = () => {
  return (
    <div>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <TicketsPage />
        </Stack>
        {/* <h1>This is a dashboard</h1> */}
      </Box>
    </div>
  );
};

export default Tickets;
