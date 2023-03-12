import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import CardItem from "../../component/CardItem/CardItem";
import BannerCarousel from "../../component/BannerCarousel/BannerCarousel";
import IntroductionTree from "../../component/Introduction/IntroductTree";
import { Button, Input, Space } from "antd";
import LiveAnyway from "./Component/LiveAnyway/LiveAnyway";
import ServiceSection from "./Component/ServiceSection/ServiceSection";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/produdct/productSlice";

function HomePage() {
  const dispatch = useDispatch();
  const getAllProductRedux = useSelector((state) => state.product.allProduct);
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  useEffect(() => {
    setAllProduct(getAllProductRedux);
  }, [getAllProductRedux]);

  console.log(allProduct);
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  return (
    <div className="homepage_container">
      <BannerCarousel />
      <div className="relative mx-auto px-10 py-20 .from-black-revert">
        <LiveAnyway />
        <div className="background absolute w-full h-2/4 bg-[black] z-[5] top-0 right-0"></div>
      </div>
      <div className="p-6">
        <div className="w-full flex justify-between">
          <h1 className="text-[#7FA25C] font-bold text-[1.5rem] mb-5">
            Sản phậm được ưa chuộng
          </h1>
          <div className="flex ">
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{
                width: 200,
              }}
            />

            <Button type="primary" shape="" icon={<></>} size="large">
              Filter
            </Button>
          </div>
        </div>
        <div className="grid mb:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
      <ServiceSection />
      <IntroductionTree />
    </div>
  );
}

export default HomePage;
