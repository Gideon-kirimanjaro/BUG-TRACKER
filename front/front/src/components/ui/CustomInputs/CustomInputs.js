import Form from "react-bootstrap/Form";
import CheckBox from "../CheckBox";

function CustomInputs({ formData, data, title, checkBoxHandler }) {
  return (
    <Form>
      {formData.map((item) => {
        return (
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <p>{item.title}</p>
            <Form.Control
              type="email"
              placeholder={item.title}
              value={item.value}
              onChange={item.onChange}
            />
          </Form.Group>
        );
      })}
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <CheckBox data={data} title={title} checkboxHandler={checkBoxHandler} />
    </Form>
  );
}

export default CustomInputs;
