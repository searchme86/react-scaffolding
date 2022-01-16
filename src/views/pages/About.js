import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  console.log("detail", detail);
  console.log("typeof detail", typeof detail);
  const mode = searchParams.get("mode");
  console.log("mode", mode);
  console.log("typeof mode", typeof mode);

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>About, 소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트 입니다</p>
      <p>{location.search}</p>
      <p>detail: {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onIncreaseMode}>toggle detail</button>
      <button onClick={onToggleDetail}>mode + 1</button>
    </div>
  );
};

export default About;
