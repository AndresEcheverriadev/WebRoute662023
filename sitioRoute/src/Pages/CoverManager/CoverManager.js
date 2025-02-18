import React from "react";
import "./CoverManager.css";

function CoverManager() {
  return (
    <>
      <h2 id="reservas" className="bookingTitle">
        Agenda tu reserva
      </h2>
      <iframe
        id="restaurante-route-66"
        title="Reservas"
        src="https://www.covermanager.com/reservation/module_restaurant/restaurante-route-66/spanish"
        allow="payment"
        frameborder="0"
        height="550"
        width="100%"
        onload="iFrameResize();"
      ></iframe>
    </>
  );
}

export default CoverManager;
