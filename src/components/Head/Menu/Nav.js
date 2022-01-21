import styled from "styled-components";

export const NavElm = styled.nav`
  display: ${(props) => (props.open ? "block" : "none")};
  font-family: "Times New Roman", Times, serif;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid #fdd54f;

  @media (max-width: 768px) {
    background: linear-gradient(to right, #f8049c, #fdd54f);
  }
`;

const Nav = ({ children }) => {
  return <NavElm>{children}</NavElm>;
};

export default Nav;
