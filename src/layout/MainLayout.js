import React from "react";
import Navigation from "../component/Navigation/Navigation";

import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import HeaderTheme from "../component/HeaderTheme/HeaderTheme";

function MainLayout() {
  return (
    <>
      {/* <Navigation></Navigation> */}
      <HeaderTheme />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
