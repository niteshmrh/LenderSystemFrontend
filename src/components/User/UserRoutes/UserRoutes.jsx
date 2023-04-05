import React from "react";
import EmployementType from "../../registration/EmployementType";
import Personal_information from "../../registration/Personal_information";
import Pin from "../../registration/Pin";
import Registration from "../../registration/Registration";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../../PNF/PageNotFound";
import UserDashBoard from "../UserDashBoard/UserDashBoard";

function UserRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<UserDashBoard type="user_dashboard" />} />
      <Route path="/registration" element={<Registration type="login" />} />
      <Route
        path="/personal_information"
        element={<Personal_information type="personal_information" />}
      />
      <Route
        path="employment_type"
        element={<EmployementType type="employment_type" />}
      />
      <Route path="/pin" element={<Pin type="pin_code" />} />
      <Route path="*" element={<PageNotFound type="Page_Not_Found" />} />
    </Routes>
  );
}

export default UserRoutes;
