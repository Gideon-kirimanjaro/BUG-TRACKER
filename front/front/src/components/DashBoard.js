import { Box } from "@mui/material";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const DashBoard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState({});
  useEffect(() => {
    if (token) {
      console.log("FUNCTION WORKS");
      axios
        .get("http://localhost:4500/api/v1/bugs/dashBoard", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((data) => {
          setUserData(data.data);
        });
    } else {
      navigate("/");
    }
  }, [navigate, token]);
  return (
    <Box>
      <Navbar userData={userData} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
      </Stack>
    </Box>
  );
};

export default DashBoard;
