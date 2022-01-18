import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/header/Header";
import Main from "./content/Main";

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;
