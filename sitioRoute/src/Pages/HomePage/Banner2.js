import * as React from "react";

const Banner2 = (props) => (
  <main className="homeBanner2">
    <h1 className="homeBanner__Title2">
      El misterio y el sabor,
      <br />
      se toman nuestra barra.
    </h1>
    <h1 className="homeBanner__MobileTitle2">
      El misterio, se toma nuestra barra.
    </h1>
    <div id="mobileEmptyBR"></div>
    <h5 className="homeBanner__subtitle">
      Descubre nuestra carta de coctelería tradicional,
      <br />
      de autor y clásica.
    </h5>
    <a href="#reservas" className="botonReservaWrapper">
      <button className="botonReserva">Reservar</button>
    </a>
  </main>
);

export default Banner2;
