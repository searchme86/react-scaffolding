import React from "react";
import SubLogin from "./SubLogin";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  padding: 0;
`;

const Login = () => {
  return (
    <div>
      <Title>Login 페이지 입니다</Title>
      <SubLogin />
    </div>
  );
};

export default Login;
