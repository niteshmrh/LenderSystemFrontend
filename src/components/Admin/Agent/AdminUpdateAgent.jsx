import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function AdminUpdateAgent(props) {
  const [formData, setFormData] = useState({});
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const agent = props.agent;
  const uid = props.agent.uid;
  //   console.log("props-----", props, uid);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setIsFormSubmit(true);
      const response = await axios.post(
        `/updateAgent:${uid}`,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          emailId: formData.email,
          mobileNo: formData.mobile,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setIsFormSubmit(false);
        setSuccess(true);
        // window.location = "/";
        navigate("/lenders");
      } else {
        alert("Something went Wrong !!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="modal fade"
      id="updateAgent"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModelLabel">
              Update Agent
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {success == false ? (
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstName"
                      value={agent?.firstName}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    {/* <label>First name</label> */}
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastName"
                      value={agent?.lastName}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    {/* <label>Last name</label> */}
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={agent?.emailId}
                    onChange={(e) => handleChange(e)}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                    name="mobile"
                    value={agent?.mobileNo}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className="mb-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={agent?.password}
                    required
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <div className="col-auto">
                    <span className="form-text">
                      Must be 8-20 characters long.
                    </span>
                  </div>
                </div>
                {isFormSubmit ? (
                  <button type="submit" className="btn btn-primary">
                    Updating....
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                )}
              </form>
            ) : (
              <div className="text-success fw-bold fs-4">
                Agent Updated Successfull
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUpdateAgent;
