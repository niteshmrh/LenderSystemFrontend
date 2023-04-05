import React, { useContext } from "react";
import PageNotFound from "../../components/PNF/PageNotFound";
import { UserContext } from "../../context/userContext";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "../../components/Admin/AdminRoute/AdminRoutes";
import UserRoutes from "../../components/User/UserRoutes/UserRoutes";

function AfterLogin(props) {
  const { user } = useContext(UserContext);
  console.log("user Role Id", user.roleId);
  return <div>{user?.roleId == 1 ? <AdminRoutes /> : <UserRoutes />}</div>;
}

export default AfterLogin;
