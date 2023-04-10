import React from "react";
import { Routes, Route } from "react-router-dom";
import AgentDashboard from "../AgentDashboard/AgentDashboard";

function AgentRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<AgentDashboard type="agent_dashboard" />} />
    </Routes>
  );
}

export default AgentRoutes;
