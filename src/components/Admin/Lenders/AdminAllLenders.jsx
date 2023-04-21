import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AdminUpdateLender from "./AdminUpdateLender";

function AdminAllLenders(props) {
  const [userDetails, setUserDetails] = useState({});
  const [isLoding, setIsLoding] = useState(false);
  const [isDeleteClient, setIsDeleteClient] = useState(false);
  const [oneLenderData, setOneLenderData] = useState({});

  // http://10.10.1.160:4000/api/v1/lenderData
  const fetchUserDetails = async () => {
    try {
      setIsLoding(true);
      const response = await axios.get("/getAllLender", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log("response+++++++", response);
      if (response.status === 200) {
        setUserDetails(response.data.data);
        setIsLoding(false);
        // console.log("response data---------", response.data);
      } else {
        alert("somethiong went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteLender = async (id) => {
    try {
      setIsDeleteClient(true);
      const responce = await axios.patch(`/deleteUser?id=${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (responce.status === 200) {
        setIsDeleteClient(false);
        window.location = "/lenders"; //comming this to not reload the whole page
      } else {
        alert("Somethings went wrong !!!!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [isDeleteClient]);
  // console.log("userDetails--++++++", userDetails);

  return (
    <div className="py-2">
      <div className="container-fluid">
        <div className="mt-1">
          <div className="fs-5 fw-bold ">All Lenders Details</div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="mt-3 text-center">
              <table className="table border" style={{ fontSize: "0.813rem" }}>
                <thead>
                  <tr>
                    {/* <th scope="col"></th> */}
                    <th scope="col">Uid</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Father Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile No.</th>
                    <th scope="col">Ifsc code</th>
                    <th scope="col">Bank Account Number</th>
                    <th scope="col">Pan</th>
                    <th scope="col">Aadhar</th>

                    <th scope="col">Password</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Updated At</th>

                    <th scope="col">isDeleted</th>
                    <th scope="col">isActive</th>
                    <th scope="col">Created By</th>

                    <th scope="col">Delete</th>
                    <th scope="col">Update</th>
                  </tr>
                </thead>
                <tbody>
                  {userDetails.length > 0 &&
                    userDetails?.map((person, index) => (
                      <tr className="person-lists text-center" key={index}>
                        <td>{person?.uid == null ? "null" : person?.uid}</td>
                        <td>
                          {person?.firstName == null
                            ? "null"
                            : person?.firstName}
                        </td>
                        <td>
                          {person?.lastName == null ? "null" : person?.lastName}
                        </td>
                        <td>
                          {person?.fatherName == null
                            ? "null"
                            : person?.fatherName}
                        </td>
                        <td>
                          {person?.gender == null ? "null" : person?.gender}
                        </td>
                        <td>
                          {person?.dateOfBirth == null
                            ? "null"
                            : person?.dateOfBirth}
                        </td>
                        <td>
                          {person?.emailId == null ? "null" : person?.emailId}
                        </td>
                        <td>
                          {person?.mobileNo == null ? "null" : person?.mobileNo}
                        </td>
                        <td>
                          {person?.ifscCode == null ? "null" : person?.ifscCode}
                        </td>
                        <td>
                          {person?.bankAccountNumber == null
                            ? "null"
                            : person?.bankAccountNumber}
                        </td>
                        <td>
                          {person?.panId == null ? "null" : person?.panId}
                        </td>
                        <td>
                          {person?.aadharId == null ? "null" : person?.aadharId}
                        </td>
                        <td>
                          {person?.password == null ? "null" : person?.password}
                        </td>
                        <td>{new Date(person?.createdAt).toUTCString()}</td>
                        <td>{new Date(person?.updatedAt).toUTCString()}</td>
                        <td>{person?.isDeleted == "N" ? "NO" : "YES"}</td>
                        <td>{person?.isActive == "N" ? "NO" : "YES"}</td>
                        <td>{person?.createdBy}</td>

                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteLender(person?.uid)}
                          >
                            <DeleteIcon />
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#updateLender"
                            onClick={() => setOneLenderData(person)}
                          >
                            <EditIcon />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AdminUpdateLender lender={oneLenderData} />
    </div>
  );
}

export default AdminAllLenders;
