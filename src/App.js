import React, { useContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import BeforeLogin from "./Routes/BeforeLogin/BeforeLogin";
import AfterLogin from "./Routes/AfterLogin/AfterLogin";
import { UserContext, UserProvider } from "./context/userContext";

function App() {
  const { user } = useContext(UserContext);

  console.log("----", user);

  return (
    <div>
      <Header />
      {user ? <AfterLogin /> : <BeforeLogin />}
    </div>
  );
}

export default App;
