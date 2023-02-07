import { Email, Password } from "@mui/icons-material";
import React, { useState } from "react";
import ReactForm from "../../components/ReactForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const obj = {
    email: email,
    password: password,
  };
  const logInHandler = () => {
    alert("log in");
  };

  const formData = [
    {
      key: 1,
      label: "email",
      value: email,
      handler: emailHandler,
    },
    {
      key: 2,
      label: "password",
      value: password,
      handler: passwordHandler,
    },
  ];
  return (
    <div>
      <ReactForm
        formData={formData}
        logIn={true}
        logInHandler={logInHandler}
        formToggle={"logIn"}
      />
    </div>
  );
};

export default Login;
