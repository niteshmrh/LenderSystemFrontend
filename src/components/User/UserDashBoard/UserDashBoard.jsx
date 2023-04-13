import React, { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { UserContext } from "../../../context/userContext";
import axios from "axios";

function UserDashBoard(props) {
  const { user } = useContext(UserContext);
  var decoded = jwt_decode(user.newJWT);
  // console.log(decoded);
  const [plans, setPlans] = useState({});

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await axios.get("/getPlans", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        setPlans(response.data.data);
        // console.log("-------res", response);
      } else {
        console.log("some things went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fetchPlans();

  console.log("plans-----", plans);
  return (
    <div className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center fs-3">
              Welcome{" "}
              <span className="fw-bold">
                {decoded.firstName + " " + decoded.lastName}
              </span>{" "}
              to Your DashBoard
            </div>
            <div className="d-flex">
              <div className="col-md-8 border">
                left
                <div className="m-4">
                  {plans.length > 0 &&
                    plans?.map((plan, index) => (
                      <span className="d-flex flex-row">
                        <div
                          key={plan.id}
                          className=" d-flex flex-column border border-primary text-center rounded mt-3"
                        >
                          <span className="fs-6 bg-primary text-white">
                            {plan.planName}
                          </span>
                          <span className="fw-lighter">
                            ROI upto
                            <span className="text-primary fw-bold">
                              {" "}
                              {plan.rateOfInterest} %{" "}
                            </span>{" "}
                            p.a
                          </span>
                          <span
                            className="text-primary"
                            style={{ fontSize: "0.8rem" }}
                          >
                            (interest and princple at the end of term)
                          </span>
                          <hr style={{ margin: "0.4rem 0" }} />
                          <span
                            className="fw-lighter"
                            style={{ fontSize: "0.85rem" }}
                          >
                            Min Investment :{" "}
                            <span className="fw-bold">
                              {plan.minimumInvestmentAmount} $
                            </span>
                          </span>
                          <span
                            className="bg-primary"
                            style={{ height: "0.2rem" }}
                          ></span>
                        </div>
                      </span>
                    ))}
                </div>
              </div>
              <div className="col-md-4 border">Right</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashBoard;
