import React, { useContext, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import AuthContext from "../../../Store/Auth";

const AsyncToast = () => {
  const ctx = useContext(AuthContext);
  useEffect(() => {
    toast.promise(ctx.fetchProjects, {
      pending: "Promise is pending",
      success: "Promise  Loaded",
      error: "error",
    });
  }, []);

  return (
    <div className="App">
      <ToastContainer />
    </div>
  );
};

export default AsyncToast;
