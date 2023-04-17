import React from "react";
import { useLocation } from "react-router-dom";

function PlanSelected(props) {
  const location = useLocation();
  //   console.log("-------------->>>>>", location.state);
  const plan = location.state;

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
                <input type="CheckBox" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanSelected;
