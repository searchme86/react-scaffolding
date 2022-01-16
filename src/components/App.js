import { Button } from "components/common";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background:#fff;
    min-height: 100vh;
    margin:0;
    color:block;
    font-family: sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>hello world</h1>
      <div>
        <Button>Test</Button>
      </div>
    </>
  );
}

export default App;
