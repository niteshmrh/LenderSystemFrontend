import React, { useEffect, useState } from "react";
import axios from "axios";

function Personal_information(props) {
  const [bankIfscDetails, setBankIfscDetails] = useState([]);
  const [ifsc, setIFSC] = useState("");
  const [post, setPost] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [pin, setPin] = useState("");
  const [count, setCount] = useState(null);
  const [formData, setFormData] = useState({});

  const [loading, setLoading] = useState(false);
  const [postres, setPostRes] = useState(false);
  // let index=0;

  // console.log("pin--------",pin, pin.length);

  // if(pin.length)

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

  // const handleIFSC = (e) => {
  //   setIFSC(e.target.value);
  // };

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
        console.log("response---", response.data[0].PostOffice);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("pinc0de", pin);
  // console.log("post[0]--------", post);
  // console.log("index No--------", count);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //*************************************** */
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("form data before", formData);
    formData.post_name = post[formData.post_name]?.Name;
    // console.log("form data after", formData);
  };

  let comma;
  if (bankIfscDetails.length > 0) {
    comma = ",";
  } else {
    comma = "";
  }
  // console.log("IFSC", ifsc);
  // console.log("bank details----", bankIfscDetails);
  // if(pin.length == 6){
  //   fetchPostalApi();
  // }

  // onSubmit={(e) => handleSubmit(e)}
  // setPin(e.target.value),

  return (
    <div className="py-1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="row g-3 ">
              <div className="col-md-12">
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
                    {/* <button
                      className="btn btn-primary"
                      onClick={() => fetchPostalApi()}
                    >
                      Submit
                    </button> */}
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
                        // value={`${post[count]?.Name}`}
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
              </div>
              {count != null && postres == true ? (
                <div className="col-md-12 row g-3">
                  <hr />
                  <div className="col-md-4">
                    <label className="form-label">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="first_Name"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    {/* <div className="valid-feedback">Looks good!</div> */}
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="last_Name"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    {/* <div className="valid-feedback">Looks good!</div> */}
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

                  {/* <div className="col-md-4"></div> */}
                  <div className="col-md-4">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid city.
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">State</label>
                    <select
                      className="form-select"
                      // onChange={(e) => handleChange(e)}
                      required
                    >
                      <option value={post[count]?.State}>
                        {post[count]?.State}
                      </option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Pin</label>
                    <input
                      type="text"
                      className="form-control"
                      // value={post[count]?.Pincode}
                      // onChange={(e) => handleChange(e)}
                      value={`${pin}`}
                      disabled
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Aadhar Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Aadhar"
                      name="aadhar_number"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    {/* <div className="valid-feedback">Looks good!</div> */}
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Pan Card Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pan card Number"
                      name="pan_number"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    {/* <div className="valid-feedback">Looks good!</div> */}
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone_number"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    {/* <div className="valid-feedback">Looks good!</div> */}
                  </div>
                  {/* <span className="text-center fs-4 fw-bold">
                Identification Marks
              </span> */}
                  <div className="col-md-6">
                    <label className="form-label">Identification Marks</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Identification Marks"
                      name="identification_marks"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                  <hr />
                  <span className="text-center fs-4 fw-bold">Bank Details</span>
                  <div className="col-4">
                    <label className="form-label">IFSC CODE</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="IFSC CODE"
                      name="IFSC"
                      onChange={(e) => {
                        // handleIFSC(e)
                        handleChange(e);
                        if (e.target.value.length == 11) {
                          fetchIFSCApi(e.target.value);
                        }
                      }}
                      required
                    />
                    <div className="ms-2 ms-2 text-danger fw-bold">
                      {bankIfscDetails.BRANCH} {comma} {bankIfscDetails.BANK}
                    </div>
                  </div>
                  {bankIfscDetails.length == 0 ? (
                    <div className="col-2">
                      {/* <button
                    className="btn btn-primary form-label"
                    style={{ marginTop: "32px" }}
                    onClick={() => fetchIFSCApi()}
                  >
                    Submit
                  </button> */}
                    </div>
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
                      <option value="salairied">Salaried</option>
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
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    {/* <div className="valid-feedback">Looks good!</div> */}
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
                        provided by me is correct
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
  );
}

export default Personal_information;
