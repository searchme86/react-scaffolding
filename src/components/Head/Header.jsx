import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MenuList, ActiveStyle } from ".HeaderData";
import NavList from "./Menu/NavList";
import NavLi from "./Menu/NavLi";
import Nav from "./Menu/Nav";

const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  background: linear-gradient(to right, #f8049c, #fdd54f);
  border-bottom: 3px solid #fdd54f;

  @media (max-width: 768px) {
    border-bottom: none;
    background: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    min-width: 25px;
    margin: 5px;
    top: 10px;
    right: 10px;
    width: 25px;
    z-index: 1;

    > span {
      display: block;
      width: 100%;
      height: 3px;
      margin: 5px 0 5px 0;
      background: black;
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={ControlMenu}>
        <span />
        <span />
        <span />
      </MobileMenuIcon>
      <Nav open={menuOpen}>
        <NavList>
          {MenuList.map((item) => {
            return (
              <NavLi key={item.index}>
                <NavLink
                  to={item.LinkTo}
                  style={({ isActive }) => (isActive ? ActiveStyle : undefined)}
                >
                  {item.text}
                </NavLink>
              </NavLi>
            );
          })}
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
