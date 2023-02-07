import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      bgcolor="yellow"
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <h1>RIGHTBAR</h1>
    </Box>
  );
};

export default Rightbar;
