import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomTable from "./CustomTable/CustomTable";
import CustomToast from "./CustomToast/CustomToast";
import ProjectInputs from "./ProjectInputs/ProjectInputs";
import { Button } from "./StyledButton";

function CustomModal({
  btnTitle,
  show,
  handleShow,
  handleClose,
  heading,
  project,
  defaultClose,
}) {
  return (
    <>
      <Button primary onClick={handleShow}>
        {btnTitle}
      </Button>
      <Modal show={show} onHide={defaultClose}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{project && <ProjectInputs />}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            {project && "Submit"}
          </Button>
        </Modal.Footer>
        <div>
          <CustomToast />
        </div>
      </Modal>
    </>
  );
}

export default CustomModal;
