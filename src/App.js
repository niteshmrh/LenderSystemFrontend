import React, { useContext } from "react";
import "./App.css";
// import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import BeforeLogin from "./Routes/BeforeLogin/BeforeLogin";
import AfterLogin from "./Routes/AfterLogin/AfterLogin";
import { UserContext, UserProvider } from "./context/userContext";
import Footer from "./components/Footer/Footer";
import Disclaimer from "./components/Footer/Disclaimer";
// import UserRoutes from "./components/User/UserRoutes/UserRoutes";
// import AgentRoutes from "./components/Agent/AgentRoutes/AgentRoutes";
// import AdminRoute from "./components/Admin/AdminRoute/AdminRoutes";

function App() {
  const { user } = useContext(UserContext);

  // console.log("---- in App.Js", user);

  return (
    <div>
      <Header />
      {user ? <AfterLogin /> : <BeforeLogin />}
      {/* <BeforeLogin /> */}
      {/* <UserRoutes /> */}
      {/* <AgentRoutes /> */}
      {/* <AdminRoute /> */}
      <hr />
      <Footer />
      <Disclaimer />
    </div>
  );
}

export default App;
