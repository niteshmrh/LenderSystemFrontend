import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../../context/userContext";

function PlanSelected(props) {
  const location = useLocation();
  //   console.log("-------------->>>>>", location.state);
  const plan = location.state;
  const { user } = useContext(UserContext);
  const [wallet, setWallet] = useState({});
  const [loading, setIsLoading] = useState(false);
  const [goodAmount, setGoodAmount] = useState(false);
  const [amountToinvest, setAmountToInvest] = useState(0);
  const id = user?.id;
  const navigate = useNavigate();
  //****************************************************************** */

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

  const handleInvest = async (e) => {
    e.preventDefault();
    if (
      amountToinvest >= plan.minimumInvestmentAmount &&
      wallet?.amount >= amountToinvest
    ) {
      try {
        const response = await axios.post(
          `/investPlan?userId=${id}`,
          {
            planId: plan?.id,
            amount: amountToinvest,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          alert(response.data.message);
          navigate("/passbook");
        }
        if (response.status === 308) {
          alert(response.data.message);
          console.log(response);
          navigate("/passbook");
        }
      } catch (e) {
        console.log("something went wrong");
      }
    } else {
      alert("Invalid Amount");
    }
  };

  useEffect(() => {
    fetchAccountDetails();
  }, []);

  // console.log(plan);
  //**************************************************************** */
  return (
    <div className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex">
              <div className="col-md-6">
                <p className="fs-4 text-center">Your Selected Plan</p>
                <div className="d-flex flex-column border border-primary text-center rounded mt-3">
                  <div className="fs-1 bg-primary text-white">
                    {plan.planName}
                  </div>
                  <div className="fw-lighter fs-2">
                    ROI upto
                    <span className=" fs-2 text-primary fw-bold">
                      {" "}
                      {plan.rateOfInterest} %{" "}
                    </span>{" "}
                    p.a
                  </div>
                  <div className="text-primary fs-2">
                    (interest and princple at the end of term)
                  </div>
                  <hr style={{ margin: "0.4rem 0" }} />
                  <div className="fw-lighter fs-2">
                    Min Investment :{" "}
                    <span className="fw-bold">
                      {plan.minimumInvestmentAmount} $
                    </span>
                  </div>
                  <div
                    className="bg-primary"
                    style={{ height: "0.2rem" }}
                  ></div>
                </div>
              </div>
              <div className="col-md-6 ms-4 py-5">
                <form>
                  <div className="p-2 col-md-10 border rounded bg-light">
                    <label className="col-form-label ms-3">
                      Balance :{"    "}
                      {wallet?.amount != null ? wallet.amount : 0}
                    </label>
                  </div>
                  <div className="ms-1">
                    {(wallet?.amount != null ? wallet?.amount : 0) <
                    plan?.minimumInvestmentAmount ? (
                      <div className="text-danger fw-light">
                        Add Minimum Amount of{" "}
                        <span className="fw-bold">
                          {plan?.minimumInvestmentAmount -
                            (wallet?.amount != null ? wallet?.amount : 0)}
                        </span>{" "}
                        to your{" "}
                        <Link to="/passbook" className="fw-bold">
                          wallet
                        </Link>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className="row g-3 align-items-center mt-1 d-flex">
                    <div className="col-auto">
                      <label className="col-form-label">
                        Enter Amount to Invest :{" "}
                      </label>
                    </div>
                    <div className="col-md-5">
                      <input
                        type="text"
                        className="form-control"
                        name="InvestAmount"
                        onChange={(e) => setAmountToInvest(e.target.value)}
                      />
                    </div>
                    <div className="text-danger">
                      {wallet?.amount < amountToinvest ? (
                        <div>
                          Add Amount to Your Wallet{" "}
                          <Link to="/passbook">Wallet</Link>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-8 mt-2">
                    <input type="CheckBox" className="form-check-input" />{" "}
                    <label className="form-check-label">Ready to Invest</label>
                  </div>
                  <div
                    className="btn btn-primary btn-lg mt-1"
                    onClick={(e) => handleInvest(e)}
                  >
                    Invest
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

export default PlanSelected;
