import axios from "axios";
import React, { createContext, useCallback, useMemo, useState } from "react";

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
  modalErrors: "",
  setModalErrors: "",
  successText: "",
  setSuccessText: "",
  fetchProjects: "",
  loader: "",
  setLoader: "",
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
  const [loader, setLoader] = useState(false);
  const [modalErrors, setModalErrors] = useState({
    state: false,
    message: "",
  });
  const [successText, setSuccessText] = useState({
    successState: false,
    successMessage: "",
  });
  const newData = useMemo(() => projectData, [projectData]);
  const newMembers = useMemo(() => members, [members]);
  const fetchProjects = useCallback(async () => {
    setLoader(true);
    await axios
      .get("http://localhost:4500/api/v1/bugs/projects")
      .then((response) => {
        setProjectData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoader(false);
  }, [newData]);
  const fetchMembers = useCallback(async () => {
    await axios
      .get("http://localhost:4500/api/v1/bugs/members")
      .then((response) => {
        setMembers(response.data.data);
        console.log(newMembers);
      });
  }, [newMembers]);
  React.useEffect(() => {
    // toast.promise(fetchProjects(), {
    //   pending: "Fetching projects",
    //   success: "Projects  Loaded",
    //   error: "error",
    // });
    // toast.promise(fetchMembers(), {
    //   pending: "Fetching Members",
    //   success: "Members  Loaded",
    //   error: "error",
    // });

    fetchProjects();
    fetchMembers();
  }, [projectId]);
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
        modalErrors: modalErrors,
        setModalErrors: setModalErrors,
        successText: successText,
        setSuccessText: setSuccessText,
        fetchProjects: fetchProjects,
        loader: loader,
        setLoader: setLoader,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
