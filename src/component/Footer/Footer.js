import React, { useEffect, useState } from "react";
// import { movieService } from "../../Services/movie.service";
import "./Footer.scss";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import ScrollToTop from "react-scroll-to-top";

export default function Footer() {
  const [theater, setTheater] = useState([]);
  // useEffect(() => {
  //   movieService
  //     .getTheaterInfo()
  //     .then((res) => {
  //       setTheater(res.data.content);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const renderTheater = () => {
    return theater.map((item, index) => {
      return <img key={index} src={item.logo} className="w-10" alt="" />;
    });
  };
  return (
    <div className="footer" style={{ backgroundColor: "#151515" }}>
      <ScrollToTop
        smooth
        top={200}
        height={20}
        width={40}
        className="animate-bounce bg-black"
      />
      <div
        style={{ borderBottom: "1px solid #666" }}
        className="grid mb:grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 container mx-auto px-10 py-10 "
      >
        <div className="col">
          {/* <h1 className="text-[#7FA25C] text-[1.5rem] font-bold text-base">Địa chỉ</h1>
          <div className="my-3">
            <h1 className="text-[white] mb-2"> - Thỏa thuận sử dụng</h1>
            <h1 className="text-[white] mb-2"> - Chính sách bảo mật</h1>
            <h1 className="text-[white] mb-2"> - Thỏa thuận sử dụng</h1>
            <h1 className="text-[white] mb-2"> - Chính sách bảo mật</h1>
          </div> */}
          <img
            src="https://png.pngtree.com/png-vector/20220914/ourmid/pngtree-tree-logo-design-with-green-leaves-simple-symbol-icon-illustration-vector-png-image_6174356.png"
            alt=""
            className=""
          />
        </div>
        <div className="col">
          <h1 className="text-[#7FA25C] text-[1.5rem] font-bold text-base">
            Địa chỉ
          </h1>
          <div className="my-3">
            <h1 className="text-[white] mb-2"> - Thỏa thuận sử dụng</h1>
            <h1 className="text-[white] mb-2"> - Chính sách bảo mật</h1>
            <h1 className="text-[white] mb-2"> - Thỏa thuận sử dụng</h1>
            <h1 className="text-[white] mb-2"> - Chính sách bảo mật</h1>
          </div>
        </div>
        <div className="col">
          <h1 className="text-[#7FA25C] text-[1.5rem] font-bold text-base">
            Liên hệ
          </h1>
          <div className="my-3 ">
            <h1 className="text-[white] mb-2"> - Thỏa thuận sử dụng</h1>
            <h1 className="text-[white] mb-2"> - Chính sách bảo mật</h1>
          </div>
        </div>

        <div className="col">
          <h1 className="text-[#7FA25C] text-[1.5rem] font-bold text-base">
            Chi nhánh
          </h1>
          <div className="my-3 ">
            <h1 className="text-[white] mb-2"> - Thỏa thuận sử dụng</h1>
            <h1 className="text-[white] mb-2"> - Chính sách bảo mật</h1>
            <h1 className="text-[white] mb-2"> - Thỏa thuận sử dụng</h1>
            <h1 className="text-[white] mb-2"> - Chính sách bảo mật</h1>
          </div>
        </div>

        <div className="col">
          <h1 className="text-[#7FA25C] text-[1.5rem] font-bold text-base">
            Mạng xã hội
          </h1>
          <div className="my-3 flex items-center gap-5">
            <BsFacebook className="text-2xl text-white hover:text-red-600 transition duration-300" />
            <BsInstagram className="text-2xl text-white hover:text-red-600 transition duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
