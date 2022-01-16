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

const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;
  &:hover {
    color: red; // <Thing> when hovered
  }
  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }
  & + & {
    background: lime; // <Thing> next to <Thing>
  }
  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }
  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

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
      <br />
      <hr />
      <Link>Unstyled, boring</Link>
      <StyledLink>Styled, exciting</StyledLink>
      <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div>

      <hr />
      <div>
        <Input placeholder="A small text input" />
        <Input placeholder="A bigger text input" size="2em" />
      </div>
    </Wrapper>
  );
}

export default StyeldExam;
