import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  height: 60px;
  top: 0;
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

const Menu = styled.nav`
  display: block;
  font-family: "Times New Roman", Times, serif;
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid #fdd54f;
  background: white;

  @media (min-width: 768px) {
    background: none;
    left: initial;
    top: initial;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
  }
`;

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const Item = styled.li`
  list-style-type: none;
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    margin-top: 5px;
  }
`;

const MenuList = [
  {
    index: 1,
    text: "홈",
    LinkTo: "/",
  },
  {
    index: 2,
    text: "고객",
    LinkTo: "/customer",
  },
  {
    index: 3,
    text: "문의사항",
    LinkTo: "/faq",
  },
  {
    index: 4,
    text: "로그인",
    LinkTo: "/login",
  },
];

function NavList({ children }) {
  return <List>{children}</List>;
}

function NavItem({ children }) {
  return <Item>{children}</Item>;
}

function Header() {
  return (
    <HeaderWrapper>
      <MobileMenuIcon>
        <span />
        <span />
        <span />
      </MobileMenuIcon>
      <Menu>
        <NavList>
          {MenuList.map((item) => {
            return (
              <NavItem key={item.index}>
                <NavLink
                  to={item.LinkTo}
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                    background: isActive ? "#7600dc" : "#f0f0f0",
                  })}
                >
                  {item.text}
                </NavLink>
              </NavItem>
            );
          })}
        </NavList>
      </Menu>
    </HeaderWrapper>
  );
}

export default Header;
