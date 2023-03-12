import React from "react";

const ItemCart = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png"
          alt=""
          className="h-[32px] w-[32px] rounded-md mr-2"
        />
        <div className="">
          <h2 className="text-[0.8rem] font-500 text-[black]">Tên cây là gì</h2>
          <p className="text-[0.6rem] font-300 text-[gray]">loại cây</p>
        </div>
      </div>
      <h1 className="">80$</h1>
    </div>
  );
};

export default ItemCart;
