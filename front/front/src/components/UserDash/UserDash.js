import { Box, Stack } from "@mui/material";
import React, { useContext } from "react";
import AuthContext from "../../Store/Auth";
import Feed from "../Feed/Feed";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const UserDash = () => {
  const ctx = useContext(AuthContext);

  return (
    <div>
      <Box>
        <Navbar userData={ctx.userData} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
        </Stack>
        {/* <h1>This is a dashboard</h1> */}
      </Box>
    </div>
  );
};

export default UserDash;
