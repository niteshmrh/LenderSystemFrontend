import React from "react";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";

function Nominee(props) {
  return (
    <div className="nominee-form">
      <div className="fs-2">
        {/* <FamilyRestroomIcon style={{ height: "4rem" }} /> */}
        <img
          src="https://www.faircent.in/sites/all/modules/lenderv2/lender_newdashboard/images/nominee-icon.png"
          alt="nominee-icon"
          height="50rem"
        />{" "}
        NOOMINEE DETAILS
      </div>
      <div className="row mt-4">
        <form>
          <div className="row">
            <div className="col-md-6 mt-4">
              <label className="form-label">NOMINEE FULL NAME</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div className="col-md-6 mt-4">
              <label className="form-label">NOMINEE AADHAR NUMBER</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Aadhar Number"
                required
              />
            </div>
            <div className="col-md-6 mt-4">
              <label className="form-label">NOMINEE PAN NUMBER</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Pan Number"
                required
              />
            </div>
            <div className="col-md-6 mt-4">
              <label className="form-label">NOMINEE EMAIL</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Nominee;
