import React from "react";
import styled from "styled-components";

const Content = styled.main`
  display: block;
  box-sizing: border-box;
  font-family: sans-serif;
  @media (max-width: 768px) {
  }
`;

const Main = ({ children }) => {
  return <Content>{children}</Content>;
};

export default Main;
