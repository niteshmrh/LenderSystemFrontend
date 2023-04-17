import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../../PNF/PageNotFound";
import UserDashBoard from "../UserDashBoard/UserDashBoard";
import Registration from "../Registration/Registration";
import PlanSelected from "../SchemeSelected/PlanSelected";
import NeedHelp from "../NeedHelp/NeedHelp";
import Report from "../Report/Report";
import Feedback from "../FeedBack/Feedback";
import BankAccount from "../BankAccount/BankAccount";
import Nominee from "../Nominee/Nominee";

function UserRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<UserDashBoard type="user_dashboard" />} />
      <Route path="/registration" element={<Registration type="reg" />} />
      <Route path="/planselected" element={<PlanSelected type="setplan" />} />
      {/* <Route path="/plan" element={<Plan type="plan" />} /> */}
      <Route path="/needhelp" element={<NeedHelp type="Need_help" />} />
      <Route path="/report" element={<Report type="Report" />} />
      <Route path="/feedback" element={<Feedback type="feedback" />} />
      <Route path="/bankaccount" element={<BankAccount type="bankaccount" />} />
      <Route path="/nominee" element={<Nominee type="bankaccount" />} />
      <Route path="*" element={<PageNotFound type="Page_Not_Found" />} />
    </Routes>
  );
}

export default UserRoutes;
