import React from "react";
import "./ServiceSection.scss";
const ServiceSection = () => {
  return (
    <div className="service my-10 section-inner w-full mx-auto p-8">
      <div className="">
        <div className="title">
          <p>What We Do Best</p>
          <h2>Our Digital Services</h2>
        </div>
        <div className="service_content">
          <div className="service_items">
            <img
              src="https://png.pngtree.com/png-clipart/20221025/original/pngtree-woman-watering-the-plant-png-image_8722449.png"
              alt=""
            />

            <h3>Web Development</h3>
            <p>
              Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent
              lacus magna, rhoncus quis magna quis.
            </p>
          </div>
          <div className="service_items">
            <img
              src="https://png.pngtree.com/png-clipart/20221025/original/pngtree-woman-taking-care-of-a-plant-png-image_8722454.png"
              alt=""
            />
            <h3>Web Development</h3>
            <p>
              Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent
              lacus magna, rhoncus quis magna quis.
            </p>
          </div>
          <div className="service_items">
            <img
              src="https://png.pngtree.com/png-vector/20221025/ourmid/pngtree-woman-watering-the-plant-png-image_6361393.png"
              alt=""
            />
            <h3>Web Development</h3>
            <p>
              Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent
              lacus magna, rhoncus quis magna quis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
