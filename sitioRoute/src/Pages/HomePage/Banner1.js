import * as React from "react";

const Banner1 = (props) => (
  <main className="homeBanner">
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
      <button className="botonReserva">Reservar</button>
    </a>
  </main>
);

export default Banner1;
