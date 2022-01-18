import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MenuList, ActiveStyle } from "./HeaderData";
import NavList from "./NavList";
import NavLi from "./NavLi";
import Nav from "./Nav";

const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(to right, #f8049c, #fdd54f);
  border-bottom: 3px solid #fdd54f;
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
      <MobileMenuIcon>
        <span />
        <span />
        <span />
      </MobileMenuIcon>
      <Nav>
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
