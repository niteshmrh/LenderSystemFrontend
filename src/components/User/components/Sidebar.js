import React, { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { UserContext } from "../../../context/userContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

function Sidebar(props) {
  const { user } = useContext(UserContext);
  var decoded = jwt_decode(user.newJWT);
  const { uid } = decoded;
  const navigate = useNavigate();
  // console.log(decoded, decoded.uid, uid);
  const [plans, setPlans] = useState({});
  const [lender, setLender] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="sidebar">
      <div className="list-group list-group-flush">
        <Link
          to="/"
          className="list-group-item list-group-item-action list-group-item-dark fw-bold"
        >
          <span className="border rounded-circle text-white bg-secondary fs-1">
            &nbsp;{decoded.firstName.charAt(0)}
            &nbsp;
          </span>{" "}
          &nbsp;&nbsp;<span>{decoded.firstName}</span>
        </Link>

        <Link
          to="/passbook"
          className="list-group-item list-group-item-action list-group-item-dark"
        >
          ESCROW PASSBOOK
        </Link>

        <Link
          to="/bankaccount"
          className="list-group-item list-group-item-action list-group-item-dark"
        >
          BANK ACCOUNT
        </Link>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-dark"
        >
          INVESTMENT LIMIT
        </a>
        <Link
          to="nominee"
          className="list-group-item list-group-item-action list-group-item-dark"
        >
          NOMINEE DETAILS
        </Link>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-dark"
        >
          TRANSACTION DETAILS
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-dark"
        >
          COMMUNICATIONS
        </a>
        <Link
          to="needhelp"
          className="list-group-item list-group-item-action list-group-item-dark"
        >
          NEED HELP ?
        </Link>

        <Link
          to="report"
          className="list-group-item list-group-item-action list-group-item-dark"
        >
          REPORTS
        </Link>

        <Link
          to="feedback"
          className="list-group-item list-group-item-action list-group-item-dark"
        >
          FEEDBACK
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
