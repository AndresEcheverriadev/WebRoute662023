import React, { Suspense, lazy, useEffect } from "react";
import Loading from "../Loading/Loading.js";
import Navbar from "../Navbar/Navbar";
import "./HomePage.css";
import "./HomePageResponsive.css";
import { analyticService } from "../../Services/AnalyticService.js";
const CarouselHome = lazy(() => import("../CarouselHome/CarouselHome.js"));
const CartaModule = lazy(() => import("../CartaModule/CartaModule.js"));
const Footer = lazy(() => import("../Footer/Footer.js"));

function HomePage() {
  useEffect(() => {
    analyticService.pageTrackingListen();
  }, []);

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
        <Footer />
      </Suspense>
    </div>
  );
}

export default HomePage;
