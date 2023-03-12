import React from "react";
import "./liveAnyway.scss";
export default function LiveAnyway() {
  return (
    <div className="relative z-10">
      <h1 className="text-white font-bold text-2xl mb-5">Live anywhere</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 mb:grid-cols-2 sm:grid-cols-2 gap-5">
        <div className="col-span-1 mt-3">
          <img
            className="w-full live-img h-full rounded-xl object-cover"
            src="https://havico-pottery.com/wp-content/uploads/2021/11/cay-canh-ghep-nhieu-loai.jpg"
            alt=""
          />
          <h1 className="text-black font-medium mt-2">Pet Allowes</h1>
        </div>
        <div className="col-span-1 mt-3">
          <img
            className="w-full live-img h-full rounded-xl object-cover"
            src="https://luttus.vn/wp-content/uploads/2019/06/chau-cay-kim-ky-phat-1.jpg"
            alt=""
          />
          <h1 className="text-black font-medium mt-2">Pet Allowes</h1>
        </div>
        <div className="col-span-1 mt-3">
          <img
            className="w-full live-img h-full rounded-xl object-cover"
            src="https://i0.wp.com/hapigo.vn/wp-content/uploads/2022/09/Optimized-chau-cay-canh.jpg"
            alt=""
          />
          <h1 className="text-black font-medium mt-2">Pet Allowes</h1>
        </div>
        <div className="col-span-1 mt-3">
          <img
            className="w-full live-img h-full rounded-xl object-cover"
            src="https://salt.tikicdn.com/cache/w1200/ts/product/cc/aa/46/9d039f9afd4208c8b64025abb236e5eb.jpg"
            alt=""
          />
          <h1 className="text-black font-medium mt-2">Pet Allowes</h1>
        </div>
      </div>
    </div>
  );
}
