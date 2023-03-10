import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import AuthContext from "./Store/Auth";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login.js";
import Dash from "./Pages/Dashboard/Dash";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import TicketsPage from "./Pages/TicketsPage/TicketsPage";
import Admin from "./Pages/Admin/Admin";

function App() {
  const ctx = useContext(AuthContext);
  if (ctx.token) {
    ctx.setToggle(false);
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/dashboard" element={<Dash />} />{" "}
        <Route path="/auth/dashboard/tickets" element={<TicketsPage />} />
        <Route path="/auth/dashboard/admin" element={<Admin />} />
        <Route path="/auth/dashBoad/projects/:id" element={<ProjectPage />} />
      </Routes>

      {/* {ctx.toggle ? <ReactForm /> : <DashBoard />} */}
    </div>
  );
}

export default App;
