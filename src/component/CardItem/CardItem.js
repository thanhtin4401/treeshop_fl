import React, { useState } from "react";
import { Button, Rate } from "antd";
import "./CardItem.scss";
function CardItem() {
  const [value, setValue] = useState(3);

  return (
    <div className="card-item p-3 relative rounded-[0.5rem] bg-[transparent] transition-all hover:bg-slate-200">
      <div className=" rounded-[0.5rem] ">
        <img
          className="h-[16rem] w-full object-cover rounded-[0.5rem]"
          src="https://www.chauximang.com/wp-content/uploads/2020/06/top-14-cay-canh-dep-nhat-viet-nam-8.jpg"
          alt=""
        />
        <div className=" my-2">
          <h3 className="font-[500] text-[1.2rem]">Name tree</h3>
          <p className="font-[400] text-[0.8rem]">kind tree</p>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="orange"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              //   stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <p className="ml-2">5.0</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="price font-bold text-[17px] text-[#2676F7]">$830</h3>
          <Button
            type="primary"
            className="bg-[#7FA25C] add-to-cart flex items-center p-[0.5rem] rounded-[0.5rem]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <p className="text-white text-[14px]">Add to cart</p>{" "}
          </Button>
        </div>
      </div>
      <div className="home-product-item__favourite">
        <i className="home-product-item__favourite-icon fas fa-check"></i>
        <span>Yêu thích</span>
      </div>
      <div className="home-product-item__sale-off">
        <span className="home-product-item__sale-off-percent">10%</span>
        <span className="home-product-item__sale-off-lable">GIẢM</span>
      </div>
    </div>
  );
}

export default CardItem;
