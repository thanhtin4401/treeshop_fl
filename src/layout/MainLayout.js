import React from "react";
import Navigation from "../component/Navigation/Navigation";

import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";

function MainLayout() {
  return (
    <>
      <Navigation></Navigation>
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
