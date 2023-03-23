import { Box } from "@mui/material";
import React from "react";
import AppRoutes from "../AppRoutes/AppRoutes";
import OutlinedCard from "../ui/FeedCard";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <OutlinedCard />
    </Box>
  );
};

export default Feed;
