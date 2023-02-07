import { Box } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import AuthContext from "../Store/Auth";
import "./Form.css";
function ReactForm({
  formData,
  formToggle,
  logIn,
  registerHandler,
  logInHandler,
}) {
  // const ctx = useContext(AuthContext);
  // const emailHandler = (e) => {
  //   setEmail(e.target.value);
  // };
  // const passwordHandler = (e) => {
  //   setPassword(e.target.value);
  // };
  // const submitHandler = (e) => {
  //   try {
  //     axios
  //       .post("http://localhost:4500/api/v1/login", {
  //         email: email,
  //         password: password,
  //       })
  //       .then((response) => response.data)
  //       .then((data) => {
  //         const { token } = data;
  //         ctx.setToken(token);
  //         ctx.setFormData(data);
  //       })
  //       .catch((error) => {
  //         if (error.response) {
  //           const { msg } = error.response.data;
  //           setFormError(msg); // => the response payload
  //         }
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   e.preventDefault();
  // };
  return (
    <Box sx={{}}>
      <div
        style={{
          width: "300px",
          margin: "auto",
          paddingTop: "100px",
        }}
        className="loginForm"
      >
        <h2>BUG TRACKER</h2>
        {logIn ? <p>Log In</p> : <p> Sign Up</p>}
      </div>

      <Form
        style={{
          width: "300px",
          margin: "auto",
        }}
        className="form-box"
      >
        {formData.map((item, index) => {
          return (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="loginForm">{item.label}</Form.Label>
              <Form.Control
                type="email"
                placeholder={`enter ${item.label}`}
                value={item.value}
                onChange={item.handler}
                className="loginForm"
              />
            </Form.Group>
          );
        })}

        <div className="submit">
          {logIn ? (
            <Button variant="primary" type="submit" onClick={logInHandler}>
              Log In
            </Button>
          ) : (
            <Button variant="primary" type="submit" onClick={registerHandler}>
              Register
            </Button>
          )}
        </div>
        {/* 
        <p style={{ color: "red" }}>{formErrors}</p> */}
      </Form>
      {logIn ? (
        <p>
          Not registered, click{" "}
          <Link className="links" to="/auth/register">
            Here
          </Link>
        </p>
      ) : (
        <p>
          Log in{" "}
          <Link to="/" className="links">
            Here
          </Link>
        </p>
      )}
    </Box>
  );
}

export default ReactForm;
