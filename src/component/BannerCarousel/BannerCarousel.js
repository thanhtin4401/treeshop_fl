import React, { useState } from "react";
import "./BannerCarousel.modul.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function BannerCarousel() {
  const [openTraiLer, setOpenTrailer] = useState(false);
  const banner = [
    {
      img: "https://images.unsplash.com/photo-1619926833625-cf0a5774d520?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      title: "The Jungle Book",
      ngayKhoiChieu: "22-09-2022",
      trailer: "https://www.youtube.com/watch?v=C4qgAaxB_pc",
      des: " The Jungle Book là chuyến phiêu lưu của Mowgli – một cậu bé mồ côi được đàn chó sói nuôi dưỡng trong rừng già Ấn Độ...",
    },
    {
      img: "https://images.unsplash.com/photo-1534754789238-6250d515412f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Peaky Blinders",
      ngayKhoiChieu: "22-09-2022",
      trailer: "https://www.youtube.com/watch?v=2nsT9uQPIrk",
      des: "Một băng đảng khét tiếng xuất hiện ở Birmingham, Anh Quốc năm 1919. Cầm đầu băng là Tommy Shelby, tên trùm tội phạm khét tiếng muốn nổi lên bằng mọi giá.",
    },
    {
      img: "https://images.unsplash.com/photo-1615870728187-3efca163c649?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Moana",
      ngayKhoiChieu: "22-09-2022",
      trailer: "https://www.youtube.com/watch?v=LKFuXETZUsI",
      des: "Nội dung phim xoay quanh chuyến hành trình vượt biển đi tìm hòn đảo huyền bí để thực hiện nhiệm vụ của tổ tiên của cô gái trẻ Moana...",
    },
    {
      img: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      title: "Venom",
      ngayKhoiChieu: "22-09-2022",
      trailer: "https://www.youtube.com/watch?v=xg059y46gOI",
      des: "Venom là nhân vật phản diện của Marvel Comics (truyện tranh). Venom xuất thân vốn là một Symbiote ngoài hành tinh có hình dạng vô định, giống như chất lỏng màu đen, sống sót bằng cách cộng sinh với vật chủ, thường là con người.",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        hashNavigation={{
          watchState: true,
        }}
        navigation={true}
        autoplay={{
          delay: 200000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {banner.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full md:h-[95vh] sm:h-[70vh] mb:h-[70vh] lg:h-[95vh] relative ">
                <div className="absolute w-full md:h-[95vh] sm:h-[70vh] mb:h-[70vh] lg:h-[95vh] bg-gradient-to-t from-black"></div>
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                  alt=""
                />
                <div
                  // style={{ transform: `translate(-50%, -50%)` }}
                  className="absolute lg:w-[40%] mb:top-[50%] mb:left-[50%]  sm:top-[50%] sm:left-[50%]  md:top-[50%] md:left-[50%]  lg:top-[45%] lg:left-[35%] rounded "
                >
                  <h1 className="text-white font-bold md:text-5xl sm:text-5xl mb:text-4xl lg:text-7xl  mb-5">
                    {item.title}
                  </h1>
                  <p className="lg:font-bold text-white">{item.des}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
