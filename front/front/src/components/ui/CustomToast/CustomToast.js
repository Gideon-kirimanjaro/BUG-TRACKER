import React, { useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../../Store/Auth";

const CustomToast = ({ errors }) => {
  const ctx = useContext(AuthContext);

  const { message, state } = ctx.modalErrors;
  const { successState, successMessage } = ctx.successText;
  if (state === true) {
    toast.error(message, {
      toastId: "custom-id-yes",
      autoClose: false,
    });
  } else if (successState === true && state === false) {
    toast.success(successMessage, {
      toastId: "another-id",
      autoClose: false,
    });
  }

  return (
    <div>
      {state === true ? <ToastContainer /> : null}
      {successState === true ? <ToastContainer /> : null}
    </div>
  );
};
export default CustomToast;
