import React, { useEffect } from "react";
import Login from "../../Pages/Login/Login";
import UserDash from "../UserDash/UserDash";

const AppRoutes = () => {
  const token = localStorage.getItem("token");

  return <div>{token === null ? <Login /> : <UserDash />}</div>;
};

export default AppRoutes;
