import React, { useState } from "react";
import RightNav from "./RightNav";
import Hambutton from "./Hambutton";
import styled from "styled-components";

const Menubar = styled.nav`
  display: flex;
  position: absolute;
  right: 0;
  height: 55px;
  padding: 0 20px;
  justify-content: space-between;
`;

const Menu = () => {
  const [open, setOpen] = useState(false);
  const show = () => {
    setOpen((open) => !open);
  };

  return (
    <Menubar>
      <Hambutton open={open} handler={show} />
      <RightNav open={open} />
    </Menubar>
  );
};

export default Menu;
