import { Box } from "@mui/material";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./Form.css";
function ReactForm({ formData, logIn, registerHandler, logInHandler, errors }) {
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
        <p>{errors}</p>

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
          <Link className="links" to="/signUp">
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
