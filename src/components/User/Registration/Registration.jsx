import React, { useState, useContext } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { UserContext } from "../../../context/userContext";

function Registration(props) {
  const { user } = useContext(UserContext);
  var decoded = jwt_decode(user.newJWT);
  const { uid } = decoded;

  const [bankIfscDetails, setBankIfscDetails] = useState([]);
  // const [ifsc, setIFSC] = useState("");
  const [post, setPost] = useState([]);
  const [pin, setPin] = useState("");
  const [count, setCount] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [postres, setPostRes] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [IsFormSubmit, setIsFormSubmit] = useState(false);

  const fetchPostalApi = async (pin) => {
    try {
      setLoading(true);
      setPostRes(false);
      const response = await axios.get(
        "https://api.postalpincode.in/pincode/" + pin,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setPost(response.data[0].PostOffice);
        setLoading(false);
        setPostRes(true);
        console.log(response);
        console.log("response data---", response.data[0].PostOffice);
      } else {
        setPostRes(false);
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchIFSCApi = async (ifsc) => {
    try {
      setLoading(true);
      const response = await axios.get("https://ifsc.razorpay.com/" + ifsc, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        setBankIfscDetails(response.data);
        setLoading(false);
        // console.log("response---", response.data[0].PostOffice);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitRegistration = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setIsFormSubmit(true);
      const response = await axios.patch(
        `/register/${uid}`,
        {
          pincode: formData.pin,
          postOffice: (formData.post_name = post[formData.post_name]?.Name),
          // firstName :
          // lastName :
          gender: formData.gender,
          fatherName: formData.father_Name,
          dateOfBirth: formData.dob,
          address: formData.address,
          city: formData.city,
          District: post[count]?.District,
          state: post[count]?.State,
          aadharId: formData.aadhar,
          panId: formData.pan,
          // mobileNo: formData.phone,
          // identificationMarks: formData.identification_marks,
          ifscCode: formData.IFSC,
          bankAccountNumber: formData.account_number,
          EmpType: formData.emp_type,
          // income: formData.income,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setIsFormSubmit(false);
        console.log("form data", formData);
        // setSuccess(true);
        window.location = "/";
      } else {
        alert("Something went Wrong !!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.post_name = post[formData.post_name]?.Name;
  };

  let comma;
  if (bankIfscDetails?.length > 0) {
    comma = ",";
  } else {
    comma = "";
  }

  return (
    <div className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="border border-primary py-3">
              <form
                className=" ms-4"
                onSubmit={(e) => handleSubmitRegistration(e)}
              >
                <div className="row g-3 align-items-center">
                  <div className="col-md-4">
                    <label className="form-label">Pin Code</label>
                    <input
                      type="text"
                      id="inputPan6"
                      className="form-control"
                      placeholder="Must be 6 Integer"
                      name="pin"
                      onChange={(e) => {
                        handleChange(e);
                        setPin(e.target.value);
                        if (e.target.value.length == 6) {
                          fetchPostalApi(e.target.value);
                        } else {
                          setPost(0);
                          setPostRes(false);
                        }
                      }}
                    />
                  </div>
                  <div className="col-auto mt-5">
                    {loading == true && postres == true ? (
                      <img
                        src="https://apptimize.com/wp-content/uploads/2015/10/Ajax-loader.gif"
                        alt=""
                        height="5rem"
                      />
                    ) : (
                      <span></span>
                    )}
                  </div>
                  {postres == true && post.length > 0 ? (
                    <div className="col-md-4">
                      <label className="form-label">Post Office</label>
                      <select
                        className="form-control form-select"
                        name="post_name"
                        onChange={(e) => (
                          setCount(e.target.value), handleChange(e)
                        )}
                      >
                        <option>Select PostOffice </option>
                        {post.map((add, index) => (
                          <option key={index} value={index}>
                            {add?.Name}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <span></span>
                  )}
                </div>
                <span className="text-center">
                  {postres == true && post.length > 0 && count != null ? (
                    <div className="mb-4">
                      <hr />
                      <span className="fs-4 fw-bold">Personal Information</span>
                    </div>
                  ) : (
                    <></>
                  )}
                </span>
                {count != null && postres == true ? (
                  <div className="col-md-12 row g-3">
                    <div className="col-md-4">
                      <label className="form-label">First name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="first_Name"
                        value={decoded.firstName}
                        // onChange={(e) => handleChange(e)}
                        disabled
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="last_Name"
                        value={decoded.lastName}
                        // onChange={(e) => handleChange(e)}
                        disabled
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label ms-4">Gender</label>
                      <div className="fs-5 ms-4">
                        <div className="mb-2">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="male"
                              name="gender"
                              onChange={(e) => handleChange(e)}
                            />
                            <label className="form-check-label">Male</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="female"
                              name="gender"
                              onChange={(e) => handleChange(e)}
                            />
                            <label className="form-check-label">Female</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              value="other"
                              name="gender"
                              onChange={(e) => handleChange(e)}
                            />
                            <label className="form-check-label">Other</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <label className="form-label">Father Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Father's Name"
                        name="father_Name"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                    <div className="col-md-5">
                      <label className="form-label">Date Of Birth</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="DD/MM/YYYY"
                        name="dob"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address with House Number and LandMark"
                        name="address"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                      <div className="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        placeholder="City"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                      <div className="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">District</label>
                      <input
                        type="text"
                        className="form-control"
                        value={post[count]?.District}
                        name="district"
                        // onChange={(e) => handleChange(e)}
                        disabled
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">State</label>
                      <select className="form-select" disabled>
                        <option
                          name="state"
                          value={post[count]?.State}
                          // onChange={(e) => handleChange(e)}
                        >
                          {post[count]?.State}
                        </option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Aadhar Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Aadhar"
                        name="aadhar"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Pan Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Pan card Number"
                        name="pan"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Identification Marks</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Identification Marks"
                        name="identification_marks"
                        // onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                    <div className="col-md-5">
                      <label className="form-label">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={decoded.emailId}
                        // onChange={(e) => handleChange(e)}
                        disabled
                      />
                    </div>
                    <hr />
                    <span className="text-center fs-4 fw-bold">
                      Bank Details
                    </span>
                    <div className="col-4">
                      <label className="form-label">IFSC CODE</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="IFSC CODE"
                        name="IFSC"
                        onChange={(e) => {
                          handleChange(e);
                          if (e.target.value.length == 11) {
                            fetchIFSCApi(e.target.value);
                          }
                        }}
                        required
                      />
                      <div className="ms-2 ms-2 text-danger fw-bold">
                        {bankIfscDetails?.BRANCH} {comma}{" "}
                        {bankIfscDetails?.BANK}
                      </div>
                    </div>
                    {bankIfscDetails.length == 0 ? (
                      <div className="col-2"></div>
                    ) : (
                      <div className="col-4">
                        <label className="form-label">Account Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Account Number"
                          name="account_number"
                          onChange={(e) => handleChange(e)}
                          required
                        />
                        <div className="ms-2 text-danger fw-bold">
                          Account Holder Name
                        </div>
                      </div>
                    )}
                    <hr />
                    {/* <hr /> */}
                    <span className="text-center fs-4 fw-bold">
                      Employment Type
                    </span>
                    <div className="col-md-4">
                      <label className="form-label">Employment Type</label>
                      <select
                        className="form-select"
                        name="emp_type"
                        onChange={(e) => handleChange(e)}
                        required
                      >
                        <option>Select Option</option>
                        <option value="salaried">Salaried</option>
                        <option value="self employed">Self Employed</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Monthly Income</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Income"
                        name="income"
                        // onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                    <hr />
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          required
                        />
                        <label className="form-check-label">
                          Agree to terms and conditions* & All the Details
                          provided by me are correct
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary" type="submit">
                        Submit form
                      </button>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
