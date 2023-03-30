import { Notifications, Pets } from "@mui/icons-material";
import { AppBar, Avatar, Badge, InputBase, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Icons } from "../ui/Icons";
import { Search } from "../ui/Search";
import { StyledToolBar } from "../ui/StyledToolBar";
import MailIcon from "@mui/icons-material/Mail";
import { AvatarBox } from "../ui/AvatarBox";
import { useState } from "react";
import NavMenu from "../ui/NavMenu";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const avatarHandler = (e) => {
    setOpen(!open);
  };
  const [data, setData] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("http://localhost:4500/api/v1/bugs/dashBoard", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((data) => {
          setData(data.data);
        });
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <AppBar position="stick">
      <StyledToolBar>
        <Typography
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          KAI CREATIVES TICKET SYSTEM
        </Typography>
        <Pets
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />
        <Icons>
          {/* <Badge
            badgeContent={4}
            sx={{ marginRight: "5px", display: { xs: "none", md: "block" } }}
            color="error"
          >
            <MailIcon color="action" />
          </Badge>
          <Badge
            badgeContent={2}
            color="error"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Notifications color="action" />
          </Badge> */}
          <AvatarBox onClick={avatarHandler}>
            {" "}
            {/* <Avatar src="/av.jpg" />
            <NavMenu open={open} /> */}
            <h4
              style={{
                color: "pink",
                fontWeight: "bold",
              }}
            >
              Logged In as {data.data}
            </h4>
          </AvatarBox>
        </Icons>{" "}
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;
