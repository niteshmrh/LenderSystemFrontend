import React, { useState } from "react";

function AdminUpdateLender(props) {
  const [formData, setFormData] = useState({});
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const lender = props?.lender;
  const uid = props?.lender?.uid;
  console.log(props);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="modal fade"
      id="updateLender"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModelLabel">
              Update Lender
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
                      defaultValue={lender?.firstName ? lender?.firstName : ""}
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
                      defaultValue={lender?.lastName ? lender?.lastName : ""}
                      onChange={(e) => handleChange(e)}
                      // onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    defaultValue={lender?.emailId}
                    onChange={(e) => handleChange(e)}
                    // onChange={(e) => setName(e.target.value)}
                    disabled
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Father Name"
                      name="mobile"
                      defaultValue={
                        lender?.fatherName ? lender?.fatherName : ""
                      }
                      onChange={(e) => handleChange(e)}
                      // onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number"
                      name="mobile"
                      defaultValue={lender?.mobileNo ? lender?.mobileNo : ""}
                      onChange={(e) => handleChange(e)}
                      // onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Aadhar Number"
                      name="aadharId"
                      defaultValue={lender?.aadharId ? lender?.aadharId : ""}
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
                      placeholder="Pan Number"
                      name="panId"
                      defaultValue={lender?.panId ? lender?.panId : ""}
                      onChange={(e) => handleChange(e)}
                      // onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-4 d-flex mt-3">
                    <label className="form-label ms-4 fw-bold">Gender</label>
                    <div className="fs-5 ms-4">
                      <div className="mb-2 d-flex">
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
                </div>
                <div className="mb-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    defaultValue={lender?.password ? lender?.password : ""}
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
                Lender's Updated Successfull
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUpdateLender;
