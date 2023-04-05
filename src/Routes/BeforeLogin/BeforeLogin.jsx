import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../components/Home/Home";
import SignUp from "../../components/signup/SignUp";
import AdminLogin from "../../components/Admin/Login/Login";
import Login from "../../components/login/Login";
import PageNotFound from "../../components/PNF/PageNotFound";

function BeforeLogin(props) {
  return (
    <Routes>
      <Route path="/" element={<Home type="home" />} />
      <Route path="/login" element={<Login type="login" />} />
      <Route path="/signup" element={<SignUp type="signup" />} />
      {/* <Route path="/admin" element={<AdminLogin type="adminlogin" />} /> */}
      <Route path="*" element={<PageNotFound type="Page_Not_Found" />} />
    </Routes>
  );
}

export default BeforeLogin;
