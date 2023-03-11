import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CheckBox from "../CheckBox";

function CustomInputs({ data }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>project title</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>project description</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <CheckBox data={data} />
    </Form>
  );
}

export default CustomInputs;
