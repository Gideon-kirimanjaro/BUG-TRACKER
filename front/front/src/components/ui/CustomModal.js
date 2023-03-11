import React from "react";
import Modal from "react-bootstrap/Modal";
import ProjectInputs from "./ProjectInputs/ProjectInputs";
import { Button } from "./StyledButton";

function CustomModal({
  btnTitle,
  show,
  handleShow,
  handleClose,
  heading,
  project,
}) {
  return (
    <>
      <Button primary onClick={handleShow}>
        {btnTitle}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{project && <ProjectInputs />}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            {project && "Submit"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;
