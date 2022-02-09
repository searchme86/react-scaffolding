import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const Login = () => {
  const naviate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login().then(() => {
      naviate("/dashboard");
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
