import { createContext, useState } from "react";

const AuthContext = createContext({
  toggle: false,
  setToken: "",
  setToggle: "",
  token: "",
  formData: {},
  setFormData: "",
});
export default AuthContext;
export const ContextProvider = (props) => {
  const [toggle, setToggle] = useState(false);
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({});

  return (
    <AuthContext.Provider
      value={{
        toggle: toggle,
        setToggle: setToggle,
        token: token,
        setToken: setToken,
        formData: formData,
        setFormData: setFormData,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
