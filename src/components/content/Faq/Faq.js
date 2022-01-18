import React from "react";
import SubFaq from "./SubFaq";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  padding: 0;
`;

const Faq = () => {
  return (
    <div>
      <Title>Faq 페이지 입니다</Title>
      <SubFaq />
    </div>
  );
};

export default Faq;
