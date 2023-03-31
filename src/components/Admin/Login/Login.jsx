import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import image from "../../../asset/imageback.jpg";
import axios from "axios";

function AdminLogin(props) {
  const [showPassword, setShowPassword] = useState("password");
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // setIsFormSubmit(true);
      const response = await axios.post(
        "/signin",
        {
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
      if (response.status === 200) {
        alert(response.data.message);
        // setIsFormSubmit(false);
        window.location = "/";
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        className="py-5"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="login-form border p-2 m-2 rounded bg-light">
                {/* heading */}
                <h2 className="text-center mt-3">
                  LogIn as <span style={{ color: "pink" }}>Lender Admin</span>
                </h2>

                <form onSubmit={(e) => handleSubmit(e)}>
                  {/* <legend>Login as Admin</legend> */}
                  {/* Email Section */}
                  <div className="mb-3 mt-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                  {/* Password section */}
                  <div className="mb-3">
                    <input
                      type={showPassword}
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                  {/* show password section */}
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onClick={(e) => {
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
                  <div className="btn">
                    {/* <NavLink to='/home'> */}
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                    {/* </NavLink> */}
                  </div>
                  <div>
                    <NavLink to="/signup" className="text-decoration-none">
                      SignUp as Lender
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
