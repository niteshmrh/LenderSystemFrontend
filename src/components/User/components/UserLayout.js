import React from "react";
import UserRoutes from "../UserRoutes/UserRoutes";
import Sidebar from "./Sidebar";

function Layout(props) {
  return (
    <div className="bg-body-secondary py-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <UserRoutes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
