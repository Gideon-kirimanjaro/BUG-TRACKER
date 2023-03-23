import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CreateIcon from "@mui/icons-material/Create";
import DraftsIcon from "@mui/icons-material/Drafts";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PsychologyIcon from "@mui/icons-material/Psychology";
import HouseIcon from "@mui/icons-material/House";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import LightSwitch from "../ui/LightSwitch";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { AdminPanelSettings, AirplaneTicket } from "@mui/icons-material";
import AuthContext from "../../Store/Auth";
import { useNavigate } from "react-router-dom";
export default function BarList() {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
  };

  const listData = [
    {
      key: "/auth/dashboard",
      name: "DashBoard",
      icon: <HouseIcon />,
    },
    {
      key: "/auth/tickets",
      name: "Tickets",
      icon: <AirplaneTicket />,
    },
    {
      key: "/auth/admin",
      name: "Administration",
      icon: <AdminPanelSettings />,
    },
  ];
  const listHandler = (key) => {
    // ctx.setKey(key);
    navigate(key);
  };
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {" "}
          {listData.map((data) => {
            return (
              <ListItem disablePadding key={data.key}>
                <ListItemButton
                  onClick={() => {
                    listHandler(data.key);
                  }}
                >
                  <ListItemIcon>{data.icon}</ListItemIcon>
                  <ListItemText primary={data.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders"></nav>
      <Button onClick={logOut}>Log Out</Button>
    </Box>
  );
}
