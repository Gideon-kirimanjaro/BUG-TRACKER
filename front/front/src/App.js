import ReactForm from "./components/ReactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "./components/DashBoard";
import { useContext, useState } from "react";
import AuthContext from "./Store/Auth";
import { Link, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login.js";
function App() {
  const ctx = useContext(AuthContext);
  if (ctx.token) {
    ctx.setToggle(false);
  }
  return (
    <div className="App">
      <Routes>
        {" "}
        <Route path="/" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>

      {/* {ctx.toggle ? <ReactForm /> : <DashBoard />} */}
    </div>
  );
}

export default App;
