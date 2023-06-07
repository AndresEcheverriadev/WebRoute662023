import React from "react";
import Navbar from "../Navbar/Navbar";
import BookingModule from "../BookingModule/BookingModule.js";
import CartaModule from "../CartaModule/CartaModule.js";
import Footer from "../Footer/Footer.js";
import Banner1 from "./Banner1.js";
import Banner2 from "./Banner2.js";
import "./HomePage.css";
import "./HomePageResponsive.css";

function HomePage() {
  return (
    <div className="homePage">
      <Navbar />
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Banner1 />
          </div>
          <div class="carousel-item">
            <Banner2 />
          </div>
          <button
            class="carousel-control-prev carouselControlMarginPrev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next carouselControlMarginNext"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <CartaModule />
      <BookingModule />
      <Footer />
    </div>
  );
}

export default HomePage;
