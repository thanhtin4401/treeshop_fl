import { Badge, Button } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PAGEURL } from "../../constant/route";
import "./Navigation.scss";

function Navigation() {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  return (
    <div className="w-full  flex justify-between items-center navigation py-2 px-[1rem]">
      <img
        src="https://png.pngtree.com/png-vector/20220914/ourmid/pngtree-tree-logo-design-with-green-leaves-simple-symbol-icon-illustration-vector-png-image_6174356.png"
        alt=""
        className="h-[48px] w-[48px]"
      />
      <div className="">
        <div></div>
        <div className="flex justify-center items-center">
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
          <Button
            shape="round"
            onClick={() => {
              navigate(PAGEURL.LOGIN);
            }}
            className="loginBTN"
            type="primary"
          >
            Đăng nhập
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
