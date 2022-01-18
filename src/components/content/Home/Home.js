import React from "react";
import SubHome from "./SubHome";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  padding: 0;
`;

const Home = () => {
  return (
    <div>
      <Title>Home 입니다</Title>
      <SubHome />
    </div>
  );
};

export default Home;
