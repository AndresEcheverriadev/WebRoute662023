import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import Banner1 from "../HomePage/Banner1";
import BannerHalloween from "../HomePage/BannerHalloween";
import Banner2 from "../HomePage/Banner2";
import "./CarouselHome.css";

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <BannerHalloween />
      </Carousel.Item>
      <Carousel.Item>
        <Banner2 />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
