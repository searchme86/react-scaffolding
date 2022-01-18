import React from "react";
import SubCustomer from "./SubCustomer";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  padding: 0;
`;

const Customer = () => {
  return (
    <div>
      <Title>Customer 페이지 입니다</Title>
      <SubCustomer />
    </div>
  );
};

export default Customer;
