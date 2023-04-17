import React, { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { UserContext } from "../../../context/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

function UserDashBoard(props) {
  const { user } = useContext(UserContext);
  var decoded = jwt_decode(user.newJWT);
  const { uid } = decoded;
  const navigate = useNavigate();
  // console.log(decoded, decoded.uid, uid);
  const [plans, setPlans] = useState({});
  const [lender, setLender] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  let count = 0,
    nonFilledData = 0;

  useEffect(() => {
    fetchPlans();
    fetchParticularLenderData();
  }, [isLoading]);

  const fetchParticularLenderData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/combinedUserData/${uid}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        setLender(response.data.data);
        // console.log("-------res", response);
        setIsLoading(false);
      } else {
        console.log("some things went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // if (lender && !isLoading) {
  //   Object.values(lender).forEach((val) => {
  //     if (val == undefined || val == null) {
  //       count = count + 1;
  //       console.log("if ---", val);
  //     } else {
  //       console.log("else--", val);
  //     }
  //   });
  //   nonFilledData = (count / 29) * 100;
  //   console.log("nonFilledData", nonFilledData);
  // }

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
  // console.log("lender----", lender);

  // console.log("plans-----", plans);
  return (
    <div className="user-dashboard">
      <div className="text-center fs-3 mb-2">
        Welcome{" "}
        <span className="fw-bold">
          {decoded.firstName + " " + decoded.lastName}
        </span>{" "}
        to Your DashBoard
      </div>
      <div className="d-flex justify-content-around mb-5">
        <div className="col-md-6 d-flex flex-column border bg-light text-center rounded">
          <span>AUM</span>
          <span>₹ 865.37</span>
          <span>crores</span>
          <span className="bg-primary" style={{ height: "0.25rem" }}></span>
        </div>
        <div className="ms-4 col-md-6 d-flex flex-column border bg-light text-center rounded">
          <span>Age of Fund</span>
          <span>30</span>
          <span>months</span>
          <span className="bg-danger" style={{ height: "0.25rem" }}></span>
        </div>
      </div>
      <div className="fs-4 fw-medium">
        <SettingsSuggestIcon /> Choose Your Plan
      </div>
      <div className="row">
        {plans.length > 0 &&
          plans?.map((plan, index) => (
            <div className="col-md-4" key={plan.id}>
              <div className="d-flex flex-column border border-primary text-center rounded mt-3">
                <a
                  className="text-decoration-none"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/planselected", { state: plan })}
                >
                  <div className="fs-6 bg-primary text-white">
                    {plan.planName}
                  </div>
                  <div className="fw-lighter">
                    ROI upto
                    <span className="text-primary fw-bold">
                      {" "}
                      {plan.rateOfInterest} %{" "}
                    </span>{" "}
                    p.a
                  </div>
                  <div className="text-primary" style={{ fontSize: "0.75rem" }}>
                    (interest and princple at the end of term)
                  </div>
                  <hr style={{ margin: "0.4rem 0" }} />
                  <div className="fw-lighter" style={{ fontSize: "0.85rem" }}>
                    Min Investment :{" "}
                    <span className="fw-bold">
                      {plan.minimumInvestmentAmount} $
                    </span>
                  </div>
                  <div
                    className="bg-primary"
                    style={{ height: "0.2rem" }}
                  ></div>
                </a>
              </div>
            </div>
          ))}
      </div>
      <div className="text-center">
        <button className="mt-3 btn btn-primary">Invest Now</button>
      </div>
    </div>
  );
}

export default UserDashBoard;
