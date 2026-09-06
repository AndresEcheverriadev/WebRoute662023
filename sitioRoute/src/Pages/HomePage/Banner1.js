import * as React from "react";

const Banner1 = (props) => (
  <main className="homeBanner">
    <h1 className="homeBanner__Title">Nuevos sabores en la ruta.</h1>
    <h2 className="homeBanner__subtitle">
      Platos y sabores del mundo, seleccionados para ti.
    </h2>
    <a href="#reservas" className="botonReservaWrapper">
      <button className="botonReserva">Reservar</button>
    </a>
  </main>
);

export default Banner1;
