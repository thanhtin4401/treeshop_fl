import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Mainlayout from "../layout/MainLayout";
import ManagerLayout from "../layout/ManagerLayout";
import CartPage from "../page/CartPage/CartPage";
import HomePage from "../page/HomePage/HomePage";
import LoginPage from "../page/LoginPage/LoginPage";
import RegisterPage from "../page/RegisterPage/RegisterPage";
import UserPage from "../page/User/UserPage";
import PageNotFound from "../component/PageNotFound/PageNotFound";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Route>

        <Route
          path="/Manager"
          element={
            <requestAdmin>
              <ManagerLayout />
            </requestAdmin>
          }
        >
          <Route path="/Manager/User" element={<UserPage />} />
        </Route>

        <Route
          path="/"
          element={
            <requestPage>
              <AuthLayout />
            </requestPage>
          }
        >
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/Register" element={<RegisterPage />}></Route>
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
