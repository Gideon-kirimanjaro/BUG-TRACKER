// import { Box } from "@mui/material";
// // import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar/Navbar";
// import Sidebar from "./Sidebar/Sidebar";
// import Feed from "./Feed/Feed";
// import { Stack } from "@mui/system";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useContext } from "react";
// import AuthContext from "../Store/Auth";
// import Projects from "../Pages/Projects/Projects";
// const DashBoard = () => {
//   const navigate = useNavigate();
//   const ctx = useContext(AuthContext);
//   const token = localStorage.getItem("token");
//   if (token) {
//     axios
//       .get("http://localhost:4500/api/v1/bugs/dashBoard", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((data) => {
//         ctx.setUserData(data.data);
//       });
//   } else {
//     navigate("/auth/dashboard");
//   }

//   return (
//     <Box>
//       <Projects />
//     </Box>
//   );
// };

// export default DashBoard;
