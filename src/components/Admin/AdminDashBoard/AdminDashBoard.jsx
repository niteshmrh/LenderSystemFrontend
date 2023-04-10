import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import AdminAllLenders from "./AdminAllLenders";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AdminAddAgent from "../Agent/AdminAddAgent";

function AdminDashBoard(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 border border-secondary">
              ........... Admin DashBoard ...........
              <div className="text-center mt-3">
                <div className="fs-1 fw-bold">Tech Team Management</div>
              </div>
              <div className="col-md-4 py-4">
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
                  <button className="list-group-item list-group-item-action disabled">
                    A fourth button item
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
    </>
  );
}

export default AdminDashBoard;
