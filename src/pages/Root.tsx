import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import {DefaultNavbar} from "../components/Navbar/Navbar";

function RootLayout() {
  return (
    <>
      <DefaultNavbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
