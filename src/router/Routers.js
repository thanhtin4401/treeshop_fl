import { Routes, Route } from "react-router-dom";
import PageNotFound from "../component/PageNotFound/PageNotFound";
import { PAGEURL } from "../constant/route";
import LoginPage from "../page/LoginPage/LoginPage";

const isLogin = false;

const routes = isLogin ? (
  <Routes>
    <Route index path={""} element={<></>} />
  </Routes>
) : (
  <Routes>
    <Route path={PAGEURL.LOGIN} element={<LoginPage />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default routes;
