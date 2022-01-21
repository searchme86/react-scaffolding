import React from "react";
import styled from "styled-components";

const Styledbar = styled.div`
  display: none;
  position: fixed;
  width: 2rem;
  height: 2rem;
  top: 15px;
  right: 20px;
  z-index: 20;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  > span {
    display: inline-block;
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Hambutton = ({ open, handler }) => {
  return (
    <Styledbar open={open} onClick={handler} role="button">
      <span />
      <span />
      <span />
    </Styledbar>
  );
};

export default Hambutton;
