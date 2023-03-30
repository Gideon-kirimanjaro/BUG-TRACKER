import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import UserDash from "../UserDash/UserDash";
import Register from "../../Pages/Register/Register";
import Tickets from "../Tickets/Tickets";
import Admin from "../../Pages/Admin/Admin";
const AppRoutes = () => {
  // const [userToken, setUserToken] = useState(null);

  return (
    <div>
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/auth/dashboard" element={<UserDash />} />
        <Route path="/auth/dashboard/tickets" element={<Tickets />} />
        <Route path="/auth/dashboard/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
