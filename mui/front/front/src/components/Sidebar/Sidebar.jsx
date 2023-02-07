import { Box } from "@mui/material";
import React from "react";
import BarList from "./BarList";

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      {" "}
      <BarList />
    </Box>
  );
};

export default Sidebar;
