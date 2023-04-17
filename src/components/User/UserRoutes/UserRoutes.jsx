import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../../PNF/PageNotFound";
import UserDashBoard from "../UserDashBoard/UserDashBoard";
import Registration from "../Registration/Registration";

function UserRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<UserDashBoard type="user_dashboard" />} />
      <Route path="/registration" element={<Registration type="reg" />} />
      <Route path="*" element={<PageNotFound type="Page_Not_Found" />} />
    </Routes>
  );
}

export default UserRoutes;
