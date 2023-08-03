import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../HomePage/Banner1";
import Banner2 from "../HomePage/Banner2";

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <Banner1 />
      </Carousel.Item>
      <Carousel.Item>
        <Banner2 />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
