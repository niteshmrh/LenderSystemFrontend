import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import AdminAllLenders from "./AdminAllLenders";

function AdminDashBoard(props) {
  const navigate = useNavigate();
  return (
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
                  className="list-group-item list-group-item-action"
                  onClick={() => navigate("/lenders")}
                >
                  Show All Lenders
                </button>
                <button
                  className="list-group-item list-group-item-action"
                  onClick={() => navigate("/agent")}
                >
                  Show Agent Data
                </button>
                <button className="list-group-item list-group-item-action">
                  A third button item
                </button>
                <button className="list-group-item list-group-item-action">
                  A fourth button item
                </button>
              </div>
            </div>
            {/* <AdminAllLenders /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
