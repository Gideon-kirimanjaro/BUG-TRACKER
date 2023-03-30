import { Box, Stack } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Projects from "../../Pages/Projects/Projects";
import AuthContext from "../../Store/Auth";
import Feed from "../Feed/Feed";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const UserDash = () => {
  return (
    <div>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Projects />
        </Stack>
        {/* <h1>This is a dashboard</h1> */}
      </Box>
    </div>
  );
};

export default UserDash;
