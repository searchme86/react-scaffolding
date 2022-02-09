import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import RequireAuth from "./Server/RequireAuth";

const Navigate = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="settings"
          element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};

export default Navigate;
