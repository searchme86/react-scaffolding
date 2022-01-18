import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Customer from "components/content/Customer/Customer";
import Faq from "components/content/Faq/Faq";
import Home from "components/content/Home/Home";
import Login from "components/content/Login/Login";
import Layout from "components/Layout";

const GlobalStyle = createGlobalStyle`
  body{
    background:#fff;
    min-height: 100vh;
    margin:0;
    font-family: sans-serif;
    margin:0;
    padding:0;
  }
  a{
    text-decoration: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
