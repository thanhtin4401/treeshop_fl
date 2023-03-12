import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Mainlayout from "../layout/MainLayout";
import ManagerLayout from "../layout/ManagerLayout";
import CartPage from "../page/CartPage/CartPage";
import HomePage from "../page/HomePage/HomePage";
import LoginPage from "../page/LoginPage/LoginPage";
import RegisterPage from "../page/RegisterPage/RegisterPage";
import PaymentPage from "../page/Payment/PaymentPage";
import UserPage from "../page/User/UserPage";
import OrderPage from "../page/Order/OrderPage";
import ProductPage from "../page/Product/ProductPage";
import ProductTypePage from "../page/ProductType/ProductTypePage";
import RequestPage from "./ProtectRouter/requestPage";
import PageNotFound from "../component/PageNotFound/PageNotFound";
import { PAGEURL } from "../constant/route";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path={PAGEURL.HOMEPAGE} element={<HomePage />}></Route>
          <Route path={PAGEURL.CART} element={<CartPage />}></Route>
          <Route path={PAGEURL.PAYMENT} element={<PaymentPage />}></Route>
        </Route>

        <Route
          path={PAGEURL.MANAGER.DEFAULT}
          element={
            <requestAdmin>
              <ManagerLayout />
            </requestAdmin>
          }
        >
          <Route path={PAGEURL.MANAGER.USER} element={<UserPage />} />
          <Route path={PAGEURL.MANAGER.ORDER} element={<OrderPage />} />
          <Route path={PAGEURL.MANAGER.PRODUCT} element={<ProductPage />} />
          <Route
            path={PAGEURL.MANAGER.PRODUCTTYPE}
            element={<ProductTypePage />}
          />
        </Route>

        <Route
          path="/"
          element={
            <RequestPage>
              <AuthLayout />
            </RequestPage>
          }
        >
          <Route path={PAGEURL.LOGIN} element={<LoginPage />}></Route>
          <Route path={PAGEURL.REGIS} element={<RegisterPage />}></Route>
        </Route>

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
