import React from "react";
import Navbar from "../Navbar/Navbar";
import BookingModule from "../BookingModule/BookingModule.js";
import CartaModule from "../CartaModule/CartaModule.js";
import RatingsModules from "../RatingsModule/RatingsModules.js";
import Footer from "../Footer/Footer.js";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homePage">
      <Navbar />
      <main className="homeBanner">
        <h1 className="homeBanner__Title">La mejor onda </h1>
        <h1 className="homeBanner__specialTitle">&</h1>
        <h1 className="homeBanner__Title">la comida mas rica.</h1>
        <h5 className="homeBanner__subtitle">
          Disfruta platos y sabores de distintos lugares del mundo,
          seleccionados especialmente para ti.
        </h5>
        <a href="#reservas">
          <button className="botonReserva"> Reservar</button>
        </a>
      </main>
      <CartaModule />
      <RatingsModules />
      <BookingModule />
      <Footer />
    </div>
  );
}

export default HomePage;
