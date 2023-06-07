import React, { useState } from "react";
import aperitivosCarta from "./aperitivosCarta.js";
import pastasCarta from "./pastasCarta.js";
import burgersCarta from "./burgersCarta.js";
import pizzasCarta from "./pizzasCarta.js";
import postresCarta from "./postresCarta.js";
import ensaladasCarta from "./ensaladasCarta.js";
import specialitiesCarta from "./specialitiesCarta.js";
import "./CartaModule.css";
import "./CartaModuleResponsive.css";

function CartaModule() {
  const [cartaSelected, setcartaSelected] = useState(pastasCarta);

  function changeCarta(carta) {
    setcartaSelected(carta);
  }

  const hidePreview = (id) => {
    const image = document.querySelectorAll(`.hidePreview${id}`);
    image.forEach((show) => {
      if (show.style.display === "none") {
        show.style.display = "block";
      } else {
        show.style.display = "none";
      }
    });
  };

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
          onClick={() => changeCarta(pizzasCarta)}
        >
          Pizzas
        </button>
        <button
          className="carta__Selectors__Btn"
          onClick={() => changeCarta(ensaladasCarta)}
        >
          Ensaladas
        </button>
        <button
          className="carta__Selectors__Btn"
          onClick={() => changeCarta(specialitiesCarta)}
        >
          Specialities & Ribs
        </button>
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

                <div class="accordion" id={`accordion${plato.id}`}>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        onClick={() => hidePreview(plato.id)}
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseOne${plato.id}`}
                        aria-expanded="true"
                        aria-controls={`collapseOne${plato.id}`}
                      >
                        <p className="carta__PlatoCard__Nombre--Mobile">
                          {plato.nombre}
                        </p>
                      </button>
                    </h2>
                    <div
                      id={`hidePreview${plato.id}`}
                      className={`carta__PlatoCard__Imagen--PreviewButton hidePreview${plato.id}`}
                    >
                      <img
                        className="carta__PlatoCard__Imagen--PreviewImage"
                        src={plato.img}
                        alt={`${plato.nombre} ${plato.texto}`}
                      />
                    </div>
                    <div
                      id={`collapseOne${plato.id}`}
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent={`#accordion${plato.id}`}
                    >
                      <div class="accordion-body">
                        <p className="carta__PlatoCard__Descripcion--Mobile">
                          {plato.texto}
                        </p>
                        <img
                          className="carta__PlatoCard__Imagen--Responsive"
                          src={plato.img}
                          alt={`${plato.nombre} ${plato.texto}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carta__PlatoCard__IconsContainer">
                  {plato.top === true ? (
                    <>
                      <span class="material-symbols-outlined carta__PlatoCard__Icon colorIconFav">
                        favorite
                      </span>
                      <p className="carta__PlatoCard__IconText">Recomendado</p>
                    </>
                  ) : null}
                  {plato.vegan === true ? (
                    <>
                      <span class="material-symbols-outlined carta__PlatoCard__Icon colorIconVeg">
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
