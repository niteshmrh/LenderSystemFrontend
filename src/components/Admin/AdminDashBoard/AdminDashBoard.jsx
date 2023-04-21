import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import AdminAllLenders from "./AdminAllLenders";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AdminAddAgent from "../Agent/AdminAddAgent";
import ChangeUserRole from "./ChangeUserRole";

function AdminDashBoard(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" bg-body-secondary py-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="mt-3">
                <div className="fs-4 fw-bold">Tech Team Management</div>
              </div>
              <div className="col-md-4 py-2">
                <div className="list-group">
                  {/* <Link to="/lenders">test</Link> */}
                  <button
                    className="link-primary list-group-item list-group-item-action"
                    onClick={() => navigate("/lenders")}
                  >
                    Show All Lenders <ArrowForwardIcon className="float-end" />
                  </button>
                  <button
                    className="link-primary list-group-item list-group-item-action"
                    onClick={() => navigate("/agent")}
                  >
                    Show Agent Data <ArrowForwardIcon className="float-end" />
                  </button>
                  <button
                    type="button"
                    className="link-primary list-group-item list-group-item-action"
                    data-bs-toggle="modal"
                    data-bs-target="#addAgent"
                  >
                    Add Agent <ArrowForwardIcon className="float-end" />
                  </button>
                  <button
                    className="link-primary list-group-item list-group-item-action"
                    data-bs-toggle="modal"
                    data-bs-target="#changeUserRole"
                  >
                    Change User's Role
                    <ArrowForwardIcon className="float-end" />
                  </button>
                </div>
              </div>
              {/* <AdminAllLenders /> */}
            </div>
          </div>
        </div>
      </div>
      <AdminAddAgent />
      <ChangeUserRole />
    </div>
  );
}

export default AdminDashBoard;
