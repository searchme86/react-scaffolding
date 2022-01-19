import React from "react";
import SubHome from "./SubHome";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  padding: 0 0 0 10px;

  @media (max-width: 768px) {
    padding: 10px 0 0 10px;
  }
`;

const Home = () => {
  return (
    <>
      <Title>Home 입니다</Title>
      <SubHome />
    </>
  );
};

export default Home;
