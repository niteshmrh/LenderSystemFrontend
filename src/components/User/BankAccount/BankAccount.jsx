import React, { useState } from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Link } from "react-router-dom";
import axios from "axios";

function BankAccount(props) {
  const [formData, setFormData] = useState({});
  const [ifscDetails, setIfscDetails] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // console.log(formData);

  const fetchIFSCApi = async (ifsc) => {
    try {
      setLoading(true);
      const response = await axios.get("https://ifsc.razorpay.com/" + ifsc, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        setIfscDetails(response.data);
        setFormData({
          ...formData,
          address: response.data.ADDRESS,
          bankName: response.data.BANK,
          micr: response.data.MICR,
        });
        setLoading(false);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitBank = (e) => {
    e.preventDefault();
    console.log("-----", formData);
  };

  // console.log(ifscDetails);

  return (
    <div className="bank-account">
      <div className="fs-3">
        <AccountBalanceIcon style={{ height: "4rem" }} /> Bank Account
      </div>
      <hr />
      <div className="mt-5">
        <form onSubmit={(e) => handleSubmitBank(e)}>
          <div className="row ms-3">
            <div className="col-md-6">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name As Bank Passbook"
                name="name"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Bank Account Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Bank Account Number"
                name="account"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="col-md-6 mt-4">
              <label className="form-label">IFSC</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Bank IFSC"
                name="ifsc"
                onChange={(e) => {
                  handleChange(e);
                  if (e.target.value.length == 11) {
                    fetchIFSCApi(e.target.value);
                  }
                }}
                required
              />
            </div>
            <div className="col-md-6 mt-4">
              <label className="form-label">Bank Name</label>
              <input
                type="text"
                className="form-control bg-body"
                placeholder="Bank Name"
                name="bankName"
                defaultValue={ifscDetails.BANK}
                // onChange={(e) => handleChange(e)}
                disabled
              />
            </div>
            <div className="col-md-6 mt-4">
              <label className="form-label">MICR NUMBER</label>
              <input
                type="text"
                className="form-control bg-body"
                placeholder="Enter your MICR Number"
                name="micr"
                defaultValue={ifscDetails.MICR}
                // onChange={(e) => handleChange(e)}
                disabled
              />
            </div>
            <div className="col-md-6 mt-4">
              <label className="form-label">Branch Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Branch Address"
                name="address"
                defaultValue={ifscDetails.ADDRESS}
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
      <div className="d-flex flex-column col-md-6 mt-4 ms-4 bg-info-subtle justify-content-center rounded">
        <div className="m-4">
          <div className="fs-6">CURRENT INVESTMENT LIMIT</div>
          <div className="fw-bold fs-3">₹ 1,000,000</div>
          <div className="fw-medium">Current Investment: ₹ 0.00</div>
          <div className="fs-6">
            This is the maximum amount you can lend according to{" "}
            <Link to="#">guidelines by RBI.</Link>
          </div>
          <div>
            In order to know how to increase this limit{" "}
            <button className="btn btn-primary btn-sm border-dark">
              CLICK HERE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankAccount;
