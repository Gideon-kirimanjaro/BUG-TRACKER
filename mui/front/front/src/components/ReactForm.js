import axios from "axios";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthContext from "../Store/Auth";

function ReactForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormError] = useState("");
  const ctx = useContext(AuthContext);
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    try {
      axios
        .post("http://localhost:4500/api/v1/login", {
          email: email,
          password: password,
        })
        .then((response) => response.data)
        .then((data) => {
          const { token } = data;
          ctx.setToken(token);
          ctx.setFormData(data);
        })
        .catch((error) => {
          if (error.response) {
            const { msg } = error.response.data;
            setFormError(msg); // => the response payload
          }
        });
    } catch (error) {
      console.log(error);
    }

    e.preventDefault();
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={emailHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordHandler}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={submitHandler}>
        Submit
      </Button>

      <p style={{ color: "red" }}>{formErrors}</p>
    </Form>
  );
}

export default ReactForm;
