import { Box, Button, Grid } from "@mui/material";
// import axios from "axios";
import React from "react";

import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Rightbar from "./Rightbar/Rightbar";
import { Stack } from "@mui/system";
const DashBoard = () => {
  // const ctx = useContext(AuthContext);
  // const [loading, setLoading] = useState();
  // const fetchData = useCallback(async () => {
  //   setLoading(true);
  //   try {
  //     await axios
  //       .get("http://localhost:4500/api/v1/dashBoard", {
  //         headers: { Authorization: `Bearer ${ctx.formData.token}` },
  //       })
  //       .then((response) => response.data)
  //       .then((data) => console.log(data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setLoading(false);
  // }, [ctx.formData.token]);
  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);
  // console.log(">>>>Data", ctx.formData.token);
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        {/* <Rightbar /> */}
      </Stack>
    </Box>
  );
};

export default DashBoard;
