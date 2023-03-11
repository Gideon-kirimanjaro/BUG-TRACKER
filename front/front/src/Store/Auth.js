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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
