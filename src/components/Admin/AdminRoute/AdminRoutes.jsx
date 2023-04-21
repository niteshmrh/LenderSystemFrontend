import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../../PNF/PageNotFound";
import AdminDashBoard from "../AdminDashBoard/AdminDashBoard";
import AdminAllAgents from "../Agent/AdminAllAgents";
import AdminAllLenders from "../Lenders/AdminAllLenders";
import "./AdminRoutes.css";

function AdminRoute(props) {
  return (
    <Routes>
      <Route path="/" element={<AdminDashBoard />} />
      <Route path="/lenders" element={<AdminAllLenders />} />
      <Route path="/agent" element={<AdminAllAgents />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AdminRoute;
