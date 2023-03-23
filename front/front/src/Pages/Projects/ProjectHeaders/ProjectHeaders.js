import React from "react";
import CustomModal from "../../../components/ui/CustomModal";

const ProjectHeaders = ({
  title,
  btnTitle,
  clickEvent,
  show,
  handleShow,
  handleClose,
  project,
  defaultClose,
}) => {
  return (
    <div className="p-2">
      <div
        style={{
          alignItems: "center",
        }}
        className="d-flex justify-content-between "
      >
        <p>{title}</p>
        <CustomModal
          btnTitle={btnTitle}
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
          project={project}
          defaultClose={defaultClose}
        />
      </div>
    </div>
  );
};

export default ProjectHeaders;
