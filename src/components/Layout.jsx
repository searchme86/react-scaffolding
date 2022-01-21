import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Head/Header";
import Main from "./content/Main";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <footer />
    </div>
  );
};

export default Layout;
