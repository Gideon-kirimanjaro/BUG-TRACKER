import { createContext, useState } from "react";

const AuthContext = createContext({
  toggle: true,
  setToken: "",
  setToggle: "",
  token: "",
  formData: {},
  setFormData: "",
  key: "",
  setKey: "",
  projectId: "",
  setProjectId: "",
  members: "members",
  setMembers: "setMembers",
  projectData: "",
  setProjectData: "",
  projectTitle: "projectTitle",
  setProjectTitle: "setProjectTitle",
  projectDescription: "projectDescription",
  setProjectDescription: "setProjectDescription",
  checked: "",
  setChecked: "",
});
export default AuthContext;
export const ContextProvider = (props) => {
  const [toggle, setToggle] = useState(true);
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({});
  const [key, setKey] = useState("/auth/dashboard");
  const [projectId, setProjectId] = useState("");
  const [userData, setUserData] = useState({});
  const [members, setMembers] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [checked, setChecked] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        toggle: toggle,
        setToggle: setToggle,
        token: token,
        setToken: setToken,
        formData: formData,
        setFormData: setFormData,
        key: key,
        setKey: setKey,
        userData: userData,
        setUserData: setUserData,
        projectId: projectId,
        setProjectId: setProjectId,
        members: members,
        setMembers: setMembers,
        projectData: projectData,
        setProjectData: setProjectData,
        projectTitle: projectTitle,
        setProjectTitle: setProjectTitle,
        projectDescription: projectDescription,
        setProjectDescription: setProjectDescription,
        checked: checked,
        setChecked: setChecked,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
