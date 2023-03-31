import React, { useState, useEffect } from "react";
// import Login from '../login/Login';
import { NavLink } from "react-router-dom";
import axios from "axios";
import image from "../../asset/imageback.jpg";

function SignUp(props) {
  const [showPassword, setShowPassword] = useState("password");
  const [formData, setFormData] = useState({});
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isFormSubmit) {
    <div></div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (
      formData.password == formData.confirm_password &&
      formData.true_data == "on"
    ) {
      try {
        setIsFormSubmit(true);
        const response = await axios.post(
          "/signup",
          {
            firstName: formData.first_Name,
            lastName: formData.last_Name,
            mobileNo: formData.mobile,
            emailId: formData.email,
            password: formData.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        if (response.status === 201) {
          alert(response.data.message);
          setIsFormSubmit(false);
          window.location = "/login";
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setPassword("");
      alert("something went wrong");
    }
  };

  //

  return (
    <div
      className="py-2"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="border bg-light rounded p-3 m-2">
              {/* heading */}
              <h2 className="text-center mt-3">
                SignUp as <span style={{ color: "pink" }}>Lender</span>
              </h2>
              <form onSubmit={(e) => handleSubmit(e)}>
                {/* Name */}
                <div className="row mb-3 mt-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="first_Name"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    {/* <label>First name</label> */}
                    {/* <div className="valid-feedback">Looks good!</div> */}
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="last_Name"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    {/* <label>Last name</label> */}
                    {/* <div className="valid-feedback">Looks good!</div> */}
                  </div>
                </div>

                {/* Email Section */}

                <div className="mb-3">
                  {/* <label className="form-label">Pan Card Number</label> */}
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>

                {/* Mobile Number */}

                <div className="mb-3">
                  {/* <label className="form-label">Mobile Number</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                    name="mobile"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>

                {/* Password section */}

                <div className="mb-1">
                  {/* <label className="form-label">Password</label> */}
                  <input
                    type={showPassword}
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                      handleChange(e);
                    }}
                  />
                  <div className="col-auto">
                    <span className="form-text">
                      Must be 8-20 characters long.
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  {/* <label className="form-label">Password</label> */}
                  <input
                    type={showPassword}
                    className="form-control"
                    placeholder="Confirm Password"
                    name="confirm_password"
                    required
                    onChange={(e) => {
                      handleChange(e);
                      if (e.target.value == password) {
                        setValid(true);
                      } else {
                        setValid(false);
                      }
                    }}
                  />
                  {valid ? (
                    <div></div>
                  ) : (
                    <div className="col-auto">
                      <span className="form-text text-danger">
                        Password does not matched.
                      </span>
                    </div>
                  )}
                </div>

                {/* show password section */}

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="true_data"
                    onClick={(e) => {
                      handleChange(e);
                      if (e.target.checked) {
                        setShowPassword("text");
                      } else {
                        setShowPassword("password");
                      }
                    }}
                  />
                  <label className="form-check-label">Show password</label>
                </div>

                {/* Submit buttonsection */}
                <div>
                  <p>
                    if already have an account ?{" "}
                    <NavLink to="/login" className="text-decoration-none">
                      Login
                    </NavLink>
                  </p>
                </div>
                <div className="btn">
                  {/* <NavLink to='/registration' className='text-decoration-none'> */}
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                  {/* </NavLink> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
