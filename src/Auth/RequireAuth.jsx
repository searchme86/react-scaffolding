import React from "react";
import { useAuth } from "./useAuth";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  const { authed } = useAuth();
  const location = useLocation();
  return authed === true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
}
