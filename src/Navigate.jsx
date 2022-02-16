import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./Auth/Auth";

const Navigate = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {!user && (
          <Route
            path="/auth"
            element={<Auth authenticate={() => setUser(true)} />}
          />
        )}
        {user && (
          <>
            <Route
              path="/profile"
              element={<Profile logout={() => setUser(false)} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        )}
        <Route
          path="*"
          element={<Navigate to={user ? "/profile" : "/auth"} />}
        />
      </Routes>
    </>
  );
};

export default Navigate;
