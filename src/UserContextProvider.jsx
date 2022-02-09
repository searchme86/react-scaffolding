import React, { useState, createContext } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, seLoading] = useState(false);
  const [error, setError] = useState("");

  const register = (email, name, password) => {};

  const siginInUser = (email, password) => {};

  const logoutUser = () => {};

  const contextValue = {};
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
