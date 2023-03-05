import React from "react";
import "./HomePage.scss";
import CardItem from "../../component/CardItem/CardItem";
function HomePage() {
  return (
    <div className="homepage_container">
      <div className="homepage-header relative">
        <div className="h-[20rem] relative">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="absolute w-full h-full bg-black top-0 opacity-50"></div>
        </div>
        <div className=""></div>
        <div className="absolute">
          <ul className="service-container">
            <li className="service-item">
              <div></div>
            </li>
            <li className="service-item item-center"></li>
            <li className="service-item"></li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 px-[24px]">
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
  );
}

export default HomePage;
