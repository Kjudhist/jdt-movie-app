import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
