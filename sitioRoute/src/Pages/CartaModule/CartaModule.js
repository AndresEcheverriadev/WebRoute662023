import React, { useState } from "react";
import aperitivosCarta from "./aperitivosCarta.js";
import pastasCarta from "./pastasCarta.js";
import burgersCarta from "./burgersCarta.js";
import pizzasCarta from "./pizzasCarta.js";
import postresCarta from "./postresCarta.js";
import ensaladasCarta from "./ensaladasCarta.js";
import specialitiesCarta from "./specialitiesCarta.js";
import cocktailsCarta from "./cocktailsCarta.js";
import { analyticService } from "../../Services/AnalyticService.js";
import "./CartaModule.css";
import "./CartaModuleResponsive.css";

function CartaModule() {
  const [cartaSelected, setcartaSelected] = useState(pastasCarta);

  function changeCarta(carta, nameCarta) {
    analyticService.customEvent("verPlatos", nameCarta);
    setcartaSelected(carta);
  }

  return (
    <div className="cartaWrapper" id="carta">
      <h2 className="carta__Title">Nuestra deliciosa carta</h2>
      <div className="carta__SelectorsContainer">
        <button
          className="carta__Selectors__Btn"
          onClick={() => changeCarta(aperitivosCarta, "Aperitivos")}
        >
          Aperitivos
        </button>
        <button
          className="carta__Selectors__Btn"
          onClick={() => changeCarta(pastasCarta, "Pastas")}
        >
          Pastas
        </button>
        <button
          className="carta__Selectors__Btn"
          onClick={() => changeCarta(burgersCarta, "Burgers")}
        >
          Burgers & Sandwiches
        </button>
        <button
          className="carta__Selectors__Btn"
          onClick={() => changeCarta(pizzasCarta, "Pizzas")}
        >
          Pizzas
        </button>
        <button
          className="carta__Selectors__Btn"
          onClick={() => changeCarta(ensaladasCarta, "Ensaladas")}
        >
          Ensaladas
        </button>
        <button
          className="carta__Selectors__Btn"
          onClick={() => changeCarta(specialitiesCarta, "Specialities")}
        >
          Specialities & Ribs
        </button>
        <button
          className="carta__Selectors__Btn"
          onClick={() => changeCarta(postresCarta, "Postres")}
        >
          Postres
        </button>
        <button
          className="carta__Selectors__Btn"
          onClick={() => changeCarta(cocktailsCarta, "Cócteles")}
        >
          Cócteles
        </button>
      </div>
      <div className="carta__DisplayContainer">
        {cartaSelected.map((plato) => {
          return (
            <div
              className={`carta__PlatoCard ${
                plato.top === true ? "animateColorBorderFav" : ""
              } ${plato.vegan === true ? "animateColorBorderVeg" : ""}`}
              key={`${plato.id}`}
            >
              <img
                className="carta__PlatoCard__Imagen"
                src={plato.img}
                alt={`${plato.nombre} ${plato.texto}`}
              />
              <div
                className={`carta__PlatoCard__TextContainer ${
                  plato.top === true ? "PlatoCardTop" : ""
                }${plato.vegan === true ? "PlatoCardVegan" : ""} `}
              >
                <p className="carta__PlatoCard__Nombre">{plato.nombre}</p>
                <p className="carta__PlatoCard__Descripcion">{plato.texto}</p>
                {plato.top === true ? (
                  <div className="carta__PlatoCard__IconsContainer carta__PlatoCard__Top">
                    <span className="material-symbols-outlined carta__PlatoCard__Icon colorIconFav">
                      favorite
                    </span>
                    <p className="carta__PlatoCard__IconText">Recomendado</p>
                  </div>
                ) : null}
                {plato.vegan === true ? (
                  <div className="carta__PlatoCard__IconsContainer carta__PlatoCard__Vegan">
                    <span className="material-symbols-outlined carta__PlatoCard__Icon colorIconVeg">
                      eco
                    </span>
                    <p className="carta__PlatoCard__IconText">Vegan</p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartaModule;
