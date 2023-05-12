import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function EscrowPassbook(props) {
  const { user } = useContext(UserContext);
  const [wallet, setWallet] = useState({});
  const [loading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState({});
  const id = user?.id;
  const navigate = useNavigate();
  // console.log("---- in wallet", user.id);

  const fetchAccountDetails = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/getWallet?userId=${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log("response wallet", response.data);
      if (response.status === 200) {
        setWallet(response.data.data);
        setIsLoading(false);
        // console.log("In wallet response data---------", response.data);
      } else {
        alert("somethiong went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddMoney = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `/addAmount?userId=${id}`,
        {
          // userId: id,
          txn_type: "Wallet Recharge",
          amount: amount,
          flowType: "Credit",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setSuccess(true);
        alert("Successfull added ", amount);
        window.location = "/passbook";
      } else {
        alert("Something went Wrong !!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTransactions = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/getTransaction?userId=${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        setTransactions(response.data.data);
        setIsLoading(false);
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAccountDetails();
    handleTransactions();
  }, [loading]);
  // <div>Escrow passbook</div>

  // console.log("passbook wallet----", wallet);
  // console.log("passbook amount----", amount);
  console.log("passbook transection----", transactions);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 bg-primary">
            <div className="p-3 text-white d-flex">
              <div className="text-start">
                <ArrowBackIcon onClick={() => navigate("/")} />
              </div>
              <div
                className="text-center fw-bolder"
                style={{ marginLeft: "20rem" }}
              >
                Escrow Passbook
              </div>
            </div>
          </div>
          <div className="py-4 col-md-12">
            <div className="fw-strong mb-2">
              Your Virtual Escrow Account Details:
            </div>
            <div className="border rounded bg-light">
              <div className="m-2 p-2 d-flex fw-light fs-6">
                <div className="col-md-2">
                  <div className="" style={{ fontSize: "0.8rem" }}>
                    Account Number
                  </div>
                  <div
                    className="fw-medium py-3"
                    style={{ fontSize: "0.8rem" }}
                  >
                    FAIRLF1000190673
                  </div>
                </div>
                <div className="col-md-2">
                  <div style={{ fontSize: "0.8rem" }}>IFSC Code </div>
                  <div
                    className="fw-medium py-3"
                    style={{ fontSize: "0.8rem" }}
                  >
                    ICIC0000106
                  </div>
                </div>
                <div className="col-md-5">
                  <div style={{ fontSize: "0.8rem" }}>Account Name</div>
                  <div
                    className="fw-medium py-4"
                    style={{ fontSize: "0.8rem" }}
                  >
                    FAIRASSETS TECHNOLOGIES INDIA PVT LTD LENDER FUNDING ESCROW
                    AC
                  </div>
                </div>
                <div className="col-md-3">
                  <div style={{ fontSize: "0.8rem" }}>
                    Your Virtual Escrow Account VPA (UPI Virtual Payment
                    Address)
                  </div>
                  <div
                    className="fw-medium py-3"
                    style={{ fontSize: "0.8rem" }}
                  >
                    FAIRLF.1000190673@icici
                  </div>
                </div>
              </div>
              <div
                className="ms-3 text-danger mb-2"
                style={{ fontSize: "0.8rem" }}
              >
                Note: You can transfer money only via NEFT and RTGS but not via
                IMPS.
              </div>
            </div>
          </div>
          <div className="me-1 col-md-12 d-flex">
            <div className="mb-2 col-md-6">
              <div className="mb-2 fw-bolder">Withdraw Money</div>
              <div className="p-3 border rounded bg-light">
                <div className="btn btn-primary">Withdraw Money</div>
              </div>
            </div>
            <div className="ms-1 mb-2 col-md-6">
              <div className="mb-2 fw-bolder">Add Money</div>
              <div className="d-flex p-3 border rounded bg-light">
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Amount"
                    name="amount"
                    onChange={(e) => {
                      setAmount(e.target.value);
                      // console.log(e.target.value);
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleAddMoney(e)}
                  >
                    Add Money
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div>yaha se </div> */}
          {/* <hr /> */}
          <div className="py-3 d-flex">
            <div className="col-md-6">
              <div className="p-4 border rounded bg-light">
                Wallet Amount : {wallet?.amount != null ? wallet?.amount : 0}
              </div>
            </div>
            <div className=" ms-1 col-md-6">
              <div className="p-4 border rounded bg-light">
                Locked Amount : {wallet?.locked != null ? wallet?.locked : 0}
              </div>
            </div>
          </div>
          <div className="py-3">
            <div className="col-md-12">
              <div>Escrow Transaction Details:</div>
              <table
                className="table border rounded bg-light p-4 fw-medium"
                style={{ fontSize: "0.813rem" }}
              >
                <thead>
                  <tr>
                    <th scope="col">DATE</th>
                    <th scope="col">DESCRIPTION</th>
                    {/* <th scope="col">DEBIT</th>
                    <th scope="col">CREDIT</th> */}
                    <th scope="col">TRANSACTION TYPE</th>
                    <th scope="col">BALANCE</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.length > 0 &&
                    transactions.map((tran, index) => (
                      <tr key={index}>
                        <td>
                          {tran?.updatedAt == null
                            ? "null"
                            : new Date(tran?.updatedAt).toUTCString()}
                        </td>

                        <td>
                          {tran?.txn_type == null ? "null" : tran?.txn_type}
                        </td>
                        <td>{tran?.flowType}</td>
                        {/* <td className="text-success">Credit</td> */}
                        <td>{tran?.amount == null ? "null" : tran?.amount}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="py-3">
            <div className="col-md-12">
              <div>Locked Transaction Details:</div>
              <div
                className="d-flex border rounded bg-light p-4 fw-medium"
                style={{ fontSize: "0.8rem" }}
              >
                <div className="col-md-3">DATE</div>
                <div className="col-md-2">LOAN ID</div>
                <div className="col-md-4">BORROWER</div>
                <div className="col-md-3">AMOUNT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EscrowPassbook;
