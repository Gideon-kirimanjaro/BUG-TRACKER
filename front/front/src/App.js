import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import AuthContext from "./Store/Auth";

import AppRoutes from "./components/AppRoutes/AppRoutes";

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
