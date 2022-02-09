import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../Server/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { state } = useLocation();

  const handleLogin = () => {
    login().then(() => {
      navigate(state?.path || "/dashboard");
    });
  };

  return (
    <div>
      <h1>Login 페이지 입니다</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
