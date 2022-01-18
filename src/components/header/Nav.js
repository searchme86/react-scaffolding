import styled from "styled-components";

export const NavElm = styled.nav`
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
  }
`;

const Nav = ({ children }) => {
  return <NavElm>{children}</NavElm>;
};

export default Nav;
