import React, { useState } from "react";
import aperitivosCarta from "./aperitivosCarta.js";
import pastasCarta from "./pastasCarta.js";
import burgersCarta from "./burgersCarta.js";
import pizzassCarta from "./pizzasCarta.js";
import postresCarta from "./postresCarta.js";
import specialitiesCarta from "./specialitiesCarta.js";
import "./CartaModule.css";

function CartaModule() {
  const [cartaSelected, setcartaSelected] = useState(pastasCarta);

  function changeCarta(carta) {
    setcartaSelected(carta);
  }

  return (
    <div className="cartaWrapper" id="carta">
      <h2 className="carta__Title">Nuestra deliciosa carta</h2>
      <div className="carta__SelectorsContainer">
        <button
          className="carta__Selectors__Btn"
          onClick={() => changeCarta(aperitivosCarta)}
        >
          Aperitivos
        </button>
        <button
          className="carta__Selectors__Btn"
          onClick={() => changeCarta(pastasCarta)}
        >
          Pastas
        </button>
        <button
          className="carta__Selectors__Btn"
          onClick={() => changeCarta(burgersCarta)}
        >
          Burgers & Sandwiches
        </button>
        <button
          className="carta__Selectors__Btn"
          onClick={() => changeCarta(pizzassCarta)}
        >
          Pizzas
        </button>
        <button
          className="carta__Selectors__Btn"
          onClick={() => changeCarta(specialitiesCarta)}
        >
          Specialities & Ribs
        </button>

        <button className="carta__Selectors__Btn">Cócteles</button>
        <button
          className="carta__Selectors__Btn"
          onClick={() => changeCarta(postresCarta)}
        >
          Postres
        </button>
      </div>
      <div className="carta__DisplayContainer">
        {cartaSelected.map((plato) => {
          return (
            <div className="carta__PlatoCard" key={`${plato.id}`}>
              <img
                className="carta__PlatoCard__Imagen"
                src={plato.img}
                alt={`${plato.nombre} ${plato.texto}`}
              />
              <div className="carta__PlatoCard__TextContainer">
                <p className="carta__PlatoCard__Nombre">{plato.nombre}</p>
                <p className="carta__PlatoCard__Descripcion">{plato.texto}</p>
                <div className="carta__PlatoCard__IconsContainer">
                  {plato.top === true ? (
                    <>
                      <span class="material-symbols-outlined carta__PlatoCard__Icon">
                        favorite
                      </span>
                      <p className="carta__PlatoCard__IconText">Favorito</p>
                    </>
                  ) : null}
                  {plato.vegan === true ? (
                    <>
                      <span class="material-symbols-outlined carta__PlatoCard__Icon">
                        eco
                      </span>
                      <p className="carta__PlatoCard__IconText">Vegan</p>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartaModule;
