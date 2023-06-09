import axios from "axios";
import React, { useState } from "react";

function ChangeUserRole(props) {
  const [formData, setFormData] = useState({});
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("In handle submit", formData);
    try {
      setIsFormSubmit(true);
      const response = await axios.patch(
        `/updateUserRole`,
        {
          userId: formData.userId,
          roleId: formData.roleId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setIsFormSubmit(false);
        // setSuccess(true);
        window.location = "/";
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
      id="changeUserRole"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModelLabel">
              Update Role
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
              <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="mb-3">
                    {/* <label className="form-control-label">Email</label> */}
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                  <div className="d-flex">
                    <div className="col-md-5 mb-3">
                      {/* <label className="form-control-label">Email</label> */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="User Id"
                        name="userId"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                    <div className="ms-3 col-md-5 float-end">
                      <select
                        className="form-select"
                        name="roleId"
                        onChange={(e) => handleChange(e)}
                      >
                        <option>Select New Role</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Lender</option>
                        <option value={3}>Agent</option>
                      </select>
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
              </div>
            ) : (
              <div className="text-primary">Role Id Successfully Updated</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeUserRole;
