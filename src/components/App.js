import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Login from "components/pages/Login";
import Home from "components/pages/Home";
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
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
