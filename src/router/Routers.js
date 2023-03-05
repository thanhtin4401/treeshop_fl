import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequestAuth from "./ProtectRouter/requestAuth";
import RequestPage from "./ProtectRouter/requestPage";
import requestAdmin from "./ProtectRouter/requestAdmin";
import Authlayout from "../layout/AuthLayout";
import Mainlayout from "../layout/MainLayout";
import ManagerLayout from "../layout/ManagerLayout";
import HomePage from "../page/HomePage/HomePage";
import CartPage from "../page/CartPage/CartPage";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Route>

        {/* <Route
          path="/Manager"
          element={
            <requestAdmin>
              <ManagerLayout />
            </requestAdmin>
          }
        >
          <Route path="/Manager/User" element={<ListUserPage />} />
        </Route>

        <Route
          path="/"
          element={
            <RequestPage>
              <Authlayout />
            </RequestPage>
          }
        >
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Route>
        <Route path="/*" element={<NoteFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
