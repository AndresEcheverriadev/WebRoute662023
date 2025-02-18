import * as React from "react";

const Banner1 = (props) => (
  <main className="homeBanner">
    <h1 className="homeBanner__Title">
      La mejor onda,
      <br />
      el mejor halloween.
    </h1>
    <h2 className="homeBanner__subtitle">
      Disfruta platos y sabores de distintos lugares del mundo,
      <br />
      seleccionados especialmente para ti.
    </h2>
    <a href="#reservas" className="botonReservaWrapper">
      <button className="botonReserva">Reservar</button>
    </a>
  </main>
);

export default Banner1;
