import React from "react";
import { useState } from "react";
import { useUserContext } from "./context/UserContextProvider";

function App() {
  const { loading, error, user } = useUserContext();

  return <div>{error && <p className="error"></p>}</div>;
}

export default App;
