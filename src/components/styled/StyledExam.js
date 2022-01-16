import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background-color: papayawhip;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-radius: tomato;
`;

const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

function StyeldExam() {
  return (
    <Wrapper>
      <Title>Hello World</Title>
      <Button>Normal</Button>
      <Button>primary</Button>
      <TomatoButton>Tomato</TomatoButton>
      <br />
      <hr />
      <Button as="a" href="{javascript:void(0);}">
        Link with Button styles
      </Button>
      <Button as={ReversedButton}>
        Custom Button with Normal Button Styles
      </Button>
    </Wrapper>
  );
}

export default StyeldExam;
