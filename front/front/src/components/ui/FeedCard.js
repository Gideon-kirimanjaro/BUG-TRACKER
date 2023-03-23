import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Route, Routes } from "react-router-dom";
import Projects from "../../Pages/Projects/Projects";
import AuthContext from "../../Store/Auth";
import Tickets from "../Tickets/Tickets";
import Administration from "../Administration/Administration";
import ProjectPage from "../ProjectPage/ProjectPage";
import AppRoutes from "../AppRoutes/AppRoutes";
import FeedRoutes from "../AppRoutes/FeedRoutes";
import TicketsPage from "../../Pages/TicketsPage/TicketsPage";
import Admin from "../../Pages/Admin/Admin";

export default function OutlinedCard() {
  const ctx = React.useContext(AuthContext);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <FeedRoutes />
        </CardContent>
      </Card>
    </Box>
  );
}
