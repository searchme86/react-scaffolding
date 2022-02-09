import React from "react";
import AuthConsumer from "./useAuth";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  const { authed } = AuthConsumer();
  const location = useLocation();
  return (
    <>
      {authed ? (
        children
      ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
      )}
    </>
  );
}
