import React, { useContext } from "react";
import AuthContext from "../../../Store/Auth";
import CustomInputs from "../CustomInputs/CustomInputs";

const ProjectInputs = () => {
  const ctx = useContext(AuthContext);

  const formData = [
    {
      key: 1,
      title: "projectTitle",
      description: "project Title",
      value: ctx.projectTitle,
      onChange: (e) => {
        ctx.setProjectTitle(e.target.value);
      },
    },
    {
      key: 2,
      title: "projectDescription",
      description: "project description",
      value: ctx.projectDescription,
      onChange: (e) => {
        ctx.setProjectDescription(e.target.value);
      },
    },
  ];
  const checkBoxHandler = (e, item) => {
    console.log("<<<data>>", item);
    var updatedList = [...ctx.checked];
    if (e.target.checked) {
      updatedList = [...ctx.checked, item];
    } else {
      updatedList.splice(ctx.checked.indexOf(item), 1);
    }
    ctx.setChecked(updatedList);
  };

  console.log(">>>>", ctx.projectTitle, ctx.projectDescription, ctx.checked);
  return (
    <div>
      <CustomInputs
        data={ctx.members}
        title="add member"
        formData={formData}
        checkBoxHandler={checkBoxHandler}
      />
    </div>
  );
};

export default ProjectInputs;
