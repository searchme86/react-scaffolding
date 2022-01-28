import React from "react";
import styled from "styled-components";
import { MenuList, ActiveStyle } from "../HeaderData";
import { NavLink } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    width: 300px;
    height: 100vh;
    padding-top: 3.5rem;
    top: 0;
    right: 0;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    background-color: #0d2538;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      {MenuList.map((item) => {
        return (
          <li key="item.index">
            <NavLink
              to={item.LinkTo}
              style={({ isActive }) => (isActive ? ActiveStyle : undefined)}
            >
              {item.text}
            </NavLink>
          </li>
        );
      })}

      {/* <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li> */}
    </Ul>
  );
};

export default RightNav;
