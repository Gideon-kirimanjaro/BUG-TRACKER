import ReactForm from "./components/ReactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "./components/DashBoard";
import { useContext, useState } from "react";
import AuthContext from "./Store/Auth";
function App() {
  const ctx = useContext(AuthContext);
  if (ctx.token) {
    ctx.setToggle(false);
  }
  return (
    <div className="App">{ctx.toggle ? <ReactForm /> : <DashBoard />}</div>
  );
}

export default App;
