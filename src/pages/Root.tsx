import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer/Footer";

function RootLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
