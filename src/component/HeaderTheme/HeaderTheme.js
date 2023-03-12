import React, { useState } from "react";
import UserNav from "./UserNav";
import { RiMovie2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./HeaderTheme.scss";
import { Button } from "antd";
export default function HeaderTheme() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  let handleIsOpenMenu = () => {
    setIsOpenMenu((current) => !current);
    setNavbar(true);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
      // }
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className="nav__wrapped  w-full z-20 relative container ">
      <nav
        id="nav"
        className={`flex transition-all  ${
          navbar
            ? "bg-[white] header-active border-white drop-shadow-lg"
            : " bg-[#ffffffab] border-[rgba(0,0,0,0.67)]"
        }  fixed z-10  border-b-[1px] w-full items-center justify-between flex-wrap mb:px-8 sm:px-8 md:px-16 top-0 py-4`}
      >
        <div className="block lg:hidden sm:block mb:block">
          <button
            onClick={() => {
              handleIsOpenMenu();
            }}
            style={{
              padding: "0.5rem",
              background: "transparent",
              border: "1px solid gray",
            }}
            className="btn__nav flex items-center rounded text-white border-white hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-5 w-5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center flex-shrink-0 text-white lg:mr-6">
          <NavLink to="/">
            <img
              src="https://png.pngtree.com/png-vector/20220914/ourmid/pngtree-tree-logo-design-with-green-leaves-simple-symbol-icon-illustration-vector-png-image_6174356.png"
              alt=""
              className="h-[48px] w-[48px]"
            />
          </NavLink>
        </div>
        <div
          className={`nav__menu w-full block overflow-hidden flex-grow lg:flex lg:items-center lg:w-auto text-white mb:order-1 sm:order-1 md:order-1 lg:order-none ${
            isOpenMenu ? "mb:h-[250px] sm:h-[250px]" : "mb:h-0 sm:h-0"
          } transition-all ease-in  lg:h-full duration-300 lg:opacity-100 text-center`}
        >
          <div className=" justify-center font-bold nav__links text-sm lg:flex-grow mb:mr-0 sm:mr-0 lg:mr-5 lg:flex">
            <a
              className={`hover:text-red-500 no-underline ${
                navbar ? "text-[#7FA25C]" : "text-[black]"
              }  block mt-4 lg:inline-block lg:mt-0 mb:py-3 mb:ml-0 sm:ml-0 text-left sm:py-3 lg:py-0 mb:mr-0 sm:mr-0 lg:mr-4`}
              href="#listMovie"
            >
              SẢN PHẨM
            </a>
            <a
              className={`hover:text-red-500 no-underline ${
                navbar ? "text-[#7FA25C]" : "text-[black]"
              }  block mt-4 lg:inline-block lg:mt-0 mb:py-3 mb:ml-0 sm:ml-0 text-left sm:py-3 lg:py-0 mb:mr-0 sm:mr-0 lg:mr-4`}
              href="#cumRap"
            >
              DỊCH VỤ
            </a>
            <a
              className={`hover:text-red-500 no-underline ${
                navbar ? "text-[#7FA25C]" : "text-[black]"
              }  block mt-4 lg:inline-block lg:mt-0 mb:py-3 mb:ml-0 sm:ml-0 text-left sm:py-3 lg:py-0 mb:mr-0 sm:mr-0 lg:mr-4`}
              href="#gioiThieu"
            >
              GIỚI THIỆU
            </a>

            <Button className="w-full mt-4 lg:hidden">Đăng xuất</Button>
          </div>
        </div>
        <div className="lg:min-w-[10rem]">
          <UserNav />
        </div>
      </nav>
    </div>
  );
}
