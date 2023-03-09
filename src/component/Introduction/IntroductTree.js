import React from "react";
import "./IntroductTree.modul.scss";
export default function Introduct() {
  return (
    <div className="intro relative" id="gioiThieu">
      <div className="container mx-auto my-7">
        <div className="flex relative z-20 items-center justify-around lg:flex md:flex-col sm:flex-col mb:flex-col">
          <div className="introLeft w-50 text-center ">
            <h1 className="text-3xl font-bold text-white lg:mt-32">
              Nơi đây danh cho <br /> người yêu cây cảnh
            </h1>
            <p className="text-base text-white my-5">
              Không chỉ là địa chỉ uy tín để mua cây cảnh mà còn là nơi, <br />{" "}
              chăm sóc cây cảnh với nhiều dịch vụ khác.
            </p>
            <div className="p-4 bg-[#7FA25C] cta-call rounded-[2rem]">
              <h1 className="text-white text-xl text-bold">
                Gọi ngay: +8408372892
              </h1>
            </div>
          </div>
          <div className="introRight w-50 ">
            <div className=" w-full">
              <img
                className="object-contain"
                style={{ height: "400px", width: "100%" }}
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1664007780/My-portfolio/iPhone_12_Pro_Max_1_xilech.png?fbclid=IwAR3shyANOUmzxQ56gj3lFpdTCJSTchfvrA6Y8AYjrs-QwX1hOJcgoYs59QI"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="background w-full h-full absolute top-0 right-0 bg-gradient-to-t from-black"></div>
    </div>
  );
}
