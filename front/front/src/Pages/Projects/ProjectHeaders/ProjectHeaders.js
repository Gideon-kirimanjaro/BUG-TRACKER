import React from "react";
import { Button, StyledButton } from "../../../components/ui/StyledButton";

const ProjectHeaders = ({ title, btnTitle, clickEvent }) => {
  return (
    <div className="p-2">
      <div
        style={{
          alignItems: "center",
        }}
        className="d-flex justify-content-between "
      >
        <p>{title}</p>
        <Button primary onClick={clickEvent}>
          {btnTitle}
        </Button>
      </div>
    </div>
  );
};

export default ProjectHeaders;
