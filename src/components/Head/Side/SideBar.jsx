import React from "react";
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

const SideBar = ({ open, handler }) => {
  // const [open, setOpen] = useState(false);
  // const show = () => {
  //   setOpen((open) => !open);
  // };

  return (
    <Menubar>
      {/* <Hambutton more={open} hmore={handler} />
      <RightNav open={open} /> */}
      <Hambutton more={open} hmore={handler} />
      <RightNav open={open} />
    </Menubar>
  );
};

export default SideBar;
