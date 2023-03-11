import React, { useContext } from "react";
import AuthContext from "../../../Store/Auth";
import CustomInputs from "../CustomInputs/CustomInputs";

const ProjectInputs = () => {
  const ctx = useContext(AuthContext);
  return (
    <div>
      <CustomInputs data={ctx.members} />
    </div>
  );
};

export default ProjectInputs;
