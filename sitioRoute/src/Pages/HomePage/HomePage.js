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
        </div>
      </div>

      {/* <main className="homeBanner">
        <h1 className="homeBanner__Title">
          La mejor onda,
          <br />
          la comida mas rica.
        </h1>
        <h5 className="homeBanner__subtitle">
          Disfruta platos y sabores de distintos lugares del mundo,
          <br />
          seleccionados especialmente para ti.
        </h5>
        <a href="#reservas" className="botonReservaWrapper">
          <button className="botonReserva"> Reservar</button>
        </a>
      </main> */}
      <CartaModule />
      <BookingModule />
      <Footer />
    </div>
  );
}

export default HomePage;
