import { Badge, Button, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineLogout, MdOutlineLogin } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

// import { loginAction } from "../../Redux/Actions/userAction";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AmazonCircleFilled } from "@ant-design/icons";
export default function UserNav() {
  let dispatch = useDispatch();
  let history = useNavigate();
  const [openUserInfo, setOpenUserInfo] = useState(false);
  const [first, setfirst] = useState(5);
  // let userInfo = useSelector((state) => {
  //   return state.userReducer.userInfo;
  // });
  const [count, setCount] = useState();

  let userInfo = false;
  const renderContent = () => {
    if (userInfo) {
      return (
        <div className="flex mb:flex-col sm:flex-col lg:flex-row mb:items-start sm:items-start lg:space-x-5 lg:items-center ">
          <button
            to="manager"
            className="mb:py-[12px] mb:mt-[16px] sm:py-[12px] sm:mt-[16px] lg:mt-0 mb:w-full sm:w-full  font-bold flex items-center hover:text-red-500 transition duration-300 "
            onClick={() => {
              if (userInfo.maLoaiNguoiDung === "QuanTri") {
                history("/manager");
              } else {
                setOpenUserInfo(true);
              }
            }}
          >
            <BsFillPersonFill className="mr-2" />
            {userInfo.hoTen}
          </button>
          <button
            onClick={() => {
              // localStorageService.user.remove();
              // dispatch(loginAction(null));
              // message.success("Đăng xuất thành công!");
              // setTimeout(() => {
              //   history("/login");
              // }, 1000);
            }}
            className="mb:py-[12px] mb:mt-[16px] sm:py-[12px] sm:mt-[16px] lg:mt-0 w-full sm: lg:px-2 lg:py-2 rounded font-bold flex items-center transition ease-in-out delay-15 hover:bg-red-500 duration-300 "
          >
            <MdOutlineLogout className="mr-2 text-xl" />{" "}
            <span className="w-[5rem]">Đăng Xuất</span>
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex justify-end mb:flex-col sm:flex-col lg:flex-row mb:items-start sm:items-start lg:space-x-5 lg:items-center ">
          <button className="cart mr-2">
            <Badge count={count}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </Badge>
          </button>
          <Button shape="round" className="loginBTN" type="primary">
            Đăng nhập
          </Button>
        </div>
      );
    }
  };
  return <div>{renderContent()}</div>;
}
