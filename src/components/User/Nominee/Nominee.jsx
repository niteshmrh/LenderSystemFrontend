import React, { useState } from "react";
import axios from "axios";

function Nominee(props) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("+++++++++=", formData);
  };

  return (
    <div className="nominee-form">
      <div className="fs-2">
        {/* <FamilyRestroomIcon style={{ height: "4rem" }} /> */}
        <img
          src="https://www.faircent.in/sites/all/modules/lenderv2/lender_newdashboard/images/nominee-icon.png"
          alt="nominee-icon"
          height="50rem"
        />{" "}
        NOMINEE DETAILS
      </div>
      <hr />
      <div className="row mt-4">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
            <div className="col-md-6 mt-4">
              <label className="form-label">NOMINEE FULL NAME</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                name="name"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="col-md-6 mt-4">
              <label className="form-label">NOMINEE AADHAR NUMBER</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Aadhar Number"
                name="aadhar"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="col-md-6 mt-4">
              <label className="form-label">NOMINEE PAN NUMBER</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Pan Number"
                name="pan"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="col-md-6 mt-4">
              <label className="form-label">NOMINEE EMAIL</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="col-md-6 mt-4">
              <label className="form-label">RELATIONSHIP WITH NOMINEE</label>
              <input
                type="text"
                className="form-control"
                placeholder="Relation"
                name="relation"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="col-md-6 mt-4">
              <label className="form-label">NOMINEE DATE OF BIRTH</label>
              <input
                type="Date"
                className="form-control"
                placeholder="DOB"
                name="dob"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="col-md-12 mt-4">
              <label className="form-label">NOMINEE ADDRESS</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                name="address"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
          </div>
          <div className="col-12 text-center mt-4">
            <button
              className="btn btn-primary btn-lg rounded-pill fs-3"
              style={{ width: "8rem" }}
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Nominee;
