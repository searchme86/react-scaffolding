import React from "react";
import styled from "styled-components";

const Content = styled.main`
  box-sizing: border-box;
  font-family: sans-serif;
  background: yellow;
  @media (max-width: 768px) {
    margin-top: 124px;
    padding: 10px;
  }
`;

const Main = ({ children }) => {
  return <Content>{children}</Content>;
};

export default Main;
