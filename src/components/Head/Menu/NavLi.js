import React from "react";
import styled from "styled-components";

const Item = styled.li`
  list-style-type: none;
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`;

const NavLi = ({ children }) => {
  return <Item>{children}</Item>;
};

export default NavLi;
