import React from "react";
import SubCustomer from "./SubCustomer";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  padding: 0 0 0 10px;

  @media (max-width: 768px) {
    padding: 10px 0 0 10px;
  }
`;

const Customer = () => {
  return (
    <>
      <Title>Customer 페이지 입니다</Title>
      <SubCustomer />
    </>
  );
};

export default Customer;
