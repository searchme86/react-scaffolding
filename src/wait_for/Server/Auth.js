import React from "react";
import { useNavigate } from "react-router-dom";

function Auth({ authenticate }) {
  const navigate = useNavigate();
  const click = () => {
    authenticate();
    navigate("/profile");
  };
  return (
    <div>
      <h1>인증을 해주세요</h1>
      <button onClick={click}>인증버튼</button>
    </div>
  );
}

export default Auth;
