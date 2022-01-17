import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 60px;
  top: 0;
  box-sizing: border-box;
  padding: 0 16px;
  background: #eee;
`;

const Menu = styled.nav`
  display: flex;
  position: relative;
  width: initial;
  border-bottom: none;
  margin: auto 0 auto auto;
  font-family: "Times New Roman", Times, serif;
  background: none;
  left: initial;
  top: initial;
`;

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  list-style-type: none;
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`;

const Actived = {
  fontSize: 15,
  color: "red",
  background: "yellow",
};

function NavList({ children }) {
  return <List>{children}</List>;
}

function NavItem({ children }) {
  return <Item>{children}</Item>;
}

export function Header() {
  return (
    <HeaderWrapper>
      <Menu>
        <NavList>
          <NavItem>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? Actived : undefined)}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/login"
              style={({ isActive }) => (isActive ? Actived : undefined)}
            >
              Login
            </NavLink>
          </NavItem>
        </NavList>
      </Menu>
    </HeaderWrapper>
  );
}
