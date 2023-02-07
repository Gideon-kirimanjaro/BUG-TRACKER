import React, { useState } from "react";
import ReactForm from "../../components/ReactForm";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const registerHandler = () => {
    alert("log in");
  };
  const formData = [
    {
      key: 0,
      label: "userName",
      value: userName,
      handler: userNameHandler,
    },
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
        logIn={false}
        registerHandler={registerHandler}
      />
    </div>
  );
};

export default Register;
