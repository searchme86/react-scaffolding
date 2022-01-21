import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const NavList = ({ children }) => {
  return <List>{children}</List>;
};

export default NavList;
