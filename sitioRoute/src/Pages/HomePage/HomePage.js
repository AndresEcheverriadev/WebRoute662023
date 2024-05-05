import React, { Suspense, lazy, useEffect } from "react";
import Loading from "../Loading/Loading.js";
import Navbar from "../Navbar/Navbar";
import "./HomePage.css";
import "./HomePageResponsive.css";
import { useNavigate } from "react-router-dom";
import { analyticService } from "../../Services/AnalyticService.js";
const CarouselHome = lazy(() => import("../CarouselHome/CarouselHome.js"));
const CartaModule = lazy(() => import("../CartaModule/CartaModule.js"));
const BookingModule = lazy(() => import("../BookingModule/BookingModule.js"));
const Footer = lazy(() => import("../Footer/Footer.js"));

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    analyticService.pageTrackingListen();

    return () => {
      analyticService.pageTrackingUnlisten(navigate);
    };
  }, [navigate]);

  return (
    <div className="homePage">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <CarouselHome />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <CartaModule />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <BookingModule />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default HomePage;
