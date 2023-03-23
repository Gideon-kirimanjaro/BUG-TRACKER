import { Email, Password } from "@mui/icons-material";
import axios, { Axios } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactForm from "../../components/ReactForm";
import AuthContext from "../../Store/Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

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
  const logIn = async () => {
    try {
      await axios
        .post("http://localhost:4500/api/v1/bugs/logIn", obj)
        .then((response) => {
          //get token from response
          const token = response.data.token;
          const { data } = response;
          if (token) {
            localStorage.setItem("token", token);
          } else {
            setErrors(data.message);
          }
          //set JWT token to local
        });
    } catch (error) {
      setErrors("There are errors in your form");
    }
  };
  const logInHandler = async (e) => {
    e.preventDefault();
    logIn();
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
        errors={errors}
      />
    </div>
  );
};

export default Login;
