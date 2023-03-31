import React, { createContext, useState, useEffect } from "react";
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const state = {
    user,
    setUser,
  };
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("localCart"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <UserContext.Provider value={state}>{props.children}</UserContext.Provider>
  );
};
