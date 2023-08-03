import React from "react";
import Navbar from "../Navbar/Navbar";
import BookingModule from "../BookingModule/BookingModule.js";
import CartaModule from "../CartaModule/CartaModule.js";
import Footer from "../Footer/Footer.js";
import CarouselHome from "../CarouselHome/CarouselHome.js";
import "./HomePage.css";
import "./HomePageResponsive.css";

function HomePage() {
  return (
    <div className="homePage">
      <Navbar />
      <CarouselHome />
      <CartaModule />
      <BookingModule />
      <Footer />
    </div>
  );
}

export default HomePage;
