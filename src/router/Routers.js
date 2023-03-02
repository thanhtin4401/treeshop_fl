import { Routes, Route } from "react-router-dom";
import PageNotFound from "../component/PageNotFound/PageNotFound";
import { PAGEURL } from "../constant/route";

const isLogin = false;

const routes = isLogin ? (
  <Routes>
    <Route index path={""} element={<></>} />
  </Routes>
) : (
  <Routes>
    <Route path={PAGEURL.LOGIN} element={<>Login Page</>} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default routes;
