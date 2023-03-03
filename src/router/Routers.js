import { Routes, Route } from "react-router-dom";
import PageNotFound from "../component/PageNotFound/PageNotFound";
import { PAGEURL } from "../constant/route";
import AuthLayout from "../layout/AuthLayout";
import ManagerLayout from "../layout/ManagerLayout";
import LoginPage from "../page/LoginPage/LoginPage";
import RegisterPage from "../page/RegisterPage/RegisterPage";
import ProductTypePage from "../page/ProductType/ProductTypePage";
import ProductPage from "../page/Product/ProductPage";
import OrderPage from "../page/Order/OrderPage";
import UserPage from "../page/User/UserPage";

const isLogin = false;

const routes = isLogin ? (
  <Routes>
    <Route index path={""} element={<></>} />
  </Routes>
) : (
  <Routes>
    <Route path="/" element={<AuthLayout />}>
      <Route path={PAGEURL.LOGIN} element={<LoginPage />} />
      <Route path={PAGEURL.REGIS} element={<RegisterPage />} />
    </Route>

    <Route path={PAGEURL.MANAGER.DEFAULT} element={<ManagerLayout />}>
      <Route path={PAGEURL.MANAGER.USER} element={<UserPage />} />
      <Route path={PAGEURL.MANAGER.ORDER} element={<OrderPage />} />
      <Route path={PAGEURL.MANAGER.PRODUCT} element={<ProductPage />} />
      <Route path={PAGEURL.MANAGER.PRODUCTTYPE} element={<ProductTypePage />} />
    </Route>

    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default routes;
