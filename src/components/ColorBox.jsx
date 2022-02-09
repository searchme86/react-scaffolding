import React, { useContext } from "react";
import ColorContext from "../context/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <div>
      <>
        <div
          style={{ width: "32px", height: "32px", background: state.color }}
        />
        <div
          style={{ width: "64px", height: "64px", background: state.subcolor }}
        />
      </>
    </div>
  );
};

export default ColorBox;
