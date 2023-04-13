import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AdminUpdateAgent from "./AdminUpdateAgent";

function AdminAllAgents(props) {
  const [agentDetails, setAgentDetails] = useState({});
  const [isLoding, setIsLoding] = useState(false);
  const [oneAgentData, setOneAgentData] = useState({});
  const [isDeleteClient, setIsDeleteClient] = useState(false);

  // url-------   http://10.10.1.160:4000/api/v1/allAgentData

  const fetchAllAgentDetails = async () => {
    try {
      setIsLoding(true);
      const response = await axios.get("/allAgentData", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      //   console.log("response+++++++", response);
      if (response.status === 200) {
        setAgentDetails(response.data.data);
        setIsLoding(false);
        // console.log("response data---------", response.data);
      } else {
        alert("somethiong went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // url --- paste your url first
  const handleDeleteAgent = async (id) => {
    try {
      setIsDeleteClient(true);
      const responce = await axios.patch(`/deleteAgent?id=${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (responce.status === 200) {
        setIsDeleteClient(false);
        window.location = "/agent"; //comming this to not reload the whole page
      } else {
        alert("Somethings went wrong !!!!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllAgentDetails();
  }, [isDeleteClient]);

  // console.log("agentData--++++++", agentDetails);
  // console.log("OneagentData--++++++", oneAgentData);

  return (
    <div className="py-4">
      <div className="container">
        <div className="text-center mt-3">
          <div className="fs-1 fw-bold ">All Agent Details</div>
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
                    {/* <th scope="col">Father Name</th> */}
                    {/* <th scope="col">Gender</th> */}
                    {/* <th scope="col">Date of Birth</th> */}
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Mobile No.</th>
                    {/* <th scope="col">Ifsc code</th> */}
                    {/* <th scope="col">Bank Account Number</th> */}
                    {/* <th scope="col">Pan</th> */}
                    {/* <th scope="col">Aadhar</th> */}
                    <th scope="col">Created At</th>
                    <th scope="col">Updated At</th>

                    <th scope="col">isDeleted</th>
                    <th scope="col">isActive</th>
                    <th scope="col">Created By</th>
                    <th scope="col">Updated By</th>

                    <th scope="col">Delete</th>
                    <th scope="col">Update</th>
                  </tr>
                </thead>
                <tbody>
                  {agentDetails.length > 0 &&
                    agentDetails?.map((agent, index) => (
                      <tr className="text-center" key={index}>
                        <td>{agent?.uid == null ? "null" : agent?.uid}</td>
                        <td>
                          {agent?.firstName == null ? "null" : agent?.firstName}
                        </td>
                        <td>
                          {agent?.lastName == null ? "null" : agent?.lastName}
                        </td>

                        {/* <td>
                          {agent?.fatherName == null
                            ? "null"
                            : agent?.fatherName}
                        </td> */}
                        {/* <td>
                          {agent?.gender == null ? "null" : agent?.gender}
                        </td>
                        <td>
                          {agent?.dateOfBirth == null
                            ? "null"
                            : agent?.dateOfBirth}
                        </td> */}

                        <td>
                          {agent?.emailId == null ? "null" : agent?.emailId}
                        </td>
                        <td>
                          {agent?.password == null ? "null" : agent?.password}
                        </td>
                        <td>
                          {agent?.mobileNo == null ? "null" : agent?.mobileNo}
                        </td>

                        <td>{new Date(agent?.createdAt).toUTCString()}</td>
                        <td>{new Date(agent?.updatedAt).toUTCString()}</td>
                        <td>{agent?.isDeleted == "N" ? "NO" : "YES"}</td>
                        <td>{agent?.isActive == "N" ? "NO" : "YES"}</td>
                        <td>
                          {agent?.createdBy == null ? "null" : agent?.createdBy}
                        </td>
                        <td>
                          {agent?.updatedBy == null ? "null" : agent?.updatedBy}
                        </td>
                        {/* <td>
                          {agent?.ifscCode == null ? "null" : agent?.ifscCode}
                        </td>
                        <td>
                          {agent?.bankAccountNumber == null
                            ? "null"
                            : agent?.bankAccountNumber}
                        </td> */}
                        {/* <td>
                          {agent?.panId == null ? "null" : agent?.panId}
                        </td>
                        <td>
                          {agent?.aadharId == null ? "null" : agent?.aadharId}
                        </td> */}

                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteAgent(agent?.uid)}
                          >
                            <DeleteIcon />
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#updateAgent"
                            onClick={() => setOneAgentData(agent)}
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
      <AdminUpdateAgent agent={oneAgentData} />
    </div>
  );
}

export default AdminAllAgents;
