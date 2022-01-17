import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Login from "components/pages/Login";
import Home from "components/pages/Home";
import Customer from "components/pages/Customer";
import Faq from "components/pages/Faq";

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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;
