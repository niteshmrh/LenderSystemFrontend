import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import image from "../../asset/imageback.jpg";
import axios from "axios";
import { UserContext } from "../../context/userContext";
import "./Login.css";

function Login(props) {
  const [showPassword, setShowPassword] = useState("password");
  const [formData, setFormData] = useState({});
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
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
      if (response.status === 200) {
        setUser(response.data.data);
        navigate("/");
        // console.log("--------", response.data.data);
        localStorage.setItem("localCart", JSON.stringify(response.data.data));
        // window.location = `/dashboard`; no need we already use navigate here for next page
      } else {
        alert("Something went wrong");
        alert(response.data.err.error.error);
      }
    } catch (error) {
      alert(error.response.data.err.error.error);
      // console.log(error.response.data.err.error.error);
      console.log(error);
    }
  };
  // console.log(loginData)
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
                  LogIn as <span style={{ color: "pink" }}>Lender</span>
                </h2>

                <form onSubmit={(e) => handleSubmit(e)}>
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
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
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

export default Login;
