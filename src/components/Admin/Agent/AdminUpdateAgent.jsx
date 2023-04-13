import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function AdminUpdateAgent(props) {
  const [formData, setFormData] = useState({});
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const agent = props?.agent;
  const uid = props?.agent?.uid;

  // console.log("props-----", props, uid);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [password, setPassword] = useState("");

  // console.log("getting---------------", props?.agent?.firstName);

  // useEffect(() => {
  //   if (props) {
  //     setFirstName(props?.agent?.firstName);
  //     setLastName(props?.agent?.lastName);
  //     setMobile(props?.agent?.mobileNo);
  //     setPassword(props?.agent?.password);
  //   }
  // }, [props]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // http://10.10.1.160:4000/api/v1/updateAgent?id=14

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsFormSubmit(true);
      const response = await axios.patch(
        `/updateAgent?id=${uid}`,
        {
          // firstName: firstName,
          // lastName: lastName,
          // emailId: props.email,
          // mobileNo: mobile,
          // password: password,

          firstName: formData.firstName,
          lastName: formData.lastName,
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
        window.location = "/agent";
        // navigate("/agent");
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
                      defaultValue={agent?.firstName ? agent?.firstName : ""}
                      onChange={(e) => handleChange(e)}
                      // onChange={(e) => setFirstName(e.target.value)}
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
                      defaultValue={agent?.lastName ? agent?.lastName : ""}
                      onChange={(e) => handleChange(e)}
                      // onChange={(e) => setLastName(e.target.value)}
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
                    defaultValue={agent?.emailId}
                    onChange={(e) => handleChange(e)}
                    // onChange={(e) => setName(e.target.value)}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                    name="mobile"
                    defaultValue={agent?.mobileNo ? agent?.mobileNo : ""}
                    onChange={(e) => handleChange(e)}
                    // onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    defaultValue={agent?.password ? agent?.password : ""}
                    onChange={(e) => handleChange(e)}
                    // onChange={(e) => setPassword(e.target.value)}
                    required
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
              <div className="text-success fw-bold fs-4 text-center">
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
