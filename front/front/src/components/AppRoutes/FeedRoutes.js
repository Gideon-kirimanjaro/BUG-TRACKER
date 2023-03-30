import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../../Pages/Admin/Admin";
import TicketsPage from "../../Pages/TicketsPage/TicketsPage";
import ProjectPage from "../ProjectPage/ProjectPage";
import Projects from "../../Pages/Projects/Projects";

const FeedRoutes = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/auth/dashboard" element={<Projects />} />
        <Route path="/auth/tickets" element={<TicketsPage />} />
        <Route path="/auth/admin" element={<Admin />} />
        <Route path="/auth/dashboard/projects/:id" element={<ProjectPage />} />
      </Routes> */}
    </div>
  );
};
export default FeedRoutes;
