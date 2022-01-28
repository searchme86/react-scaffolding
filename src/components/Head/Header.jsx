import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MenuList, ActiveStyle } from "./HeaderData";
import NavList from "./Menu/NavList";
import NavLi from "./Menu/NavLi";
import Nav from "./Menu/Nav";
import SideBar from "./Side/SideBar";

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

function Header() {
  const [open, setOpen] = useState(false);
  const show = () => {
    setOpen((open) => !open);
  };

  return (
    <HeaderWrapper>
      <SideBar open={open} handler={show} />

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
