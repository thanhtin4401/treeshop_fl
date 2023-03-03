import { Outlet } from "react-router-dom";
import AuthHeader from "../component/AuthHeader/AuthHeader";

function AuthLayout() {
  return (
    <div className="min-h-screen w-full mb-10">
      <AuthHeader />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
