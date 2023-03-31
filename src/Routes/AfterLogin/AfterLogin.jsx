import React from "react";
import Personal_information from "../../components/registration/Personal_information";
import EmployementType from "../../components/registration/EmployementType";
import Dashboard from "../../components/DashBoard/Dashboard";
import Pin from "../../components/registration/Pin";
import Registration from "../../components/registration/Registration";
import PageNotFound from "../../components/PNF/PageNotFound";

import { Route, Routes } from "react-router-dom";

function AfterLogin(props) {
  return (
    <Routes>
      <Route path="/" element={<Dashboard type="user_dashboard" />} />
      <Route path="/registration" element={<Registration type="login" />} />
      <Route path="/personal_information" element={<Personal_information      type="personal_information" />}
      />
      <Route path="employment_type" element={<EmployementType type="employment_type" />}/> 
      <Route path="/pin" element={<Pin type="pin_code" />} />
      <Route path="*" element={<PageNotFound type="Page_Not_Found" />} />

    </Routes>
  );
}

export default AfterLogin;
