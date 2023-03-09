import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [token, setToken] = useState(true);
  const getToken = () => {
    const storageToken = localStorage.getItem("token");
    setToken(storageToken);
  };
  useEffect(() => {
    getToken();
  }, []);

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
