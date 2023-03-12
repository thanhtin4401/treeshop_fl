import { Badge, Button, Popover, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineLogout, MdOutlineLogin } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import "./UserNav.scss";
// import { loginAction } from "../../Redux/Actions/userAction";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AmazonCircleFilled } from "@ant-design/icons";
import ItemCart from "./Component/ItemCart/ItemCart";
export default function UserNav() {
  let dispatch = useDispatch();
  let history = useNavigate();
  const [openUserInfo, setOpenUserInfo] = useState(false);
  const [first, setfirst] = useState(5);
  // let userInfo = useSelector((state) => {
  //   return state.userReducer.userInfo;
  // });
  const [count, setCount] = useState(5);

  const content = (
    <div className="">
      <ItemCart />
    </div>
  );

  let userInfo = false;
  const checkLogin = (userInfo) => {
    if (true) {
      return (
        <div className="flex items-center bg-[transparent] hover:bg-[#7FA25C] transition-all p-2 hover:text-[white] rounded-[0.2rem] justify-center cursor-pointer">
          <div
            className="rounded-[2rem] h-[32px] w-[32px] overflow-hidden lg:mr-2 "
            style={{ border: "1px solid #7FA25C" }}
          >
            <img
              className=""
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"
              alt=""
            />
          </div>
          <h1 className="mb:hidden sm:hidden lg:block">Tran Luong Thanh...</h1>
        </div>
      );
    } else {
      return (
        <Button shape="round" className="loginBTN" type="primary">
          Đăng nhập
        </Button>
      );
    }
  };
  const renderContent = () => {
    return (
      <div className="flex justify-end items-center lg:flex-row mb:items-center sm:items-center lg:items-center ">
        <Popover
          placement="bottomRight"
          className="popover-cart"
          content={content}
          title="giỏ hàng:"
        >
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
        </Popover>

        {checkLogin(userInfo)}
      </div>
    );
  };
  return <div>{renderContent()}</div>;
}
