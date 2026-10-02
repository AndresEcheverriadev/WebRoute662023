import burgers2 from "./imgsCarta/americanCheeseBurger.webp";
import burgers3 from "./imgsCarta/BaconCheeseburger.webp";
import burgers4 from "./imgsCarta/Route66Burger.webp";
import burgers5 from "./imgsCarta/BaconGuacamoleBurger.webp";
import burgers9 from "./imgsCarta/crispyChickenSandwich.webp";

const burgers = [
  {
    nombre: "Route 66 Burger",
    texto:
      "¡Simplemente espectacular! …salsa BBQ, queso azul, tiras de tocino y anillos de cebolla. Acompañada de lechuga, salsa route, tomate, cebolla y pepinillos.",
    img: `${burgers4}`,
    id: 4,
    top: true,
  },
  {
    nombre: "American Cheeseburger",
    texto:
      "Queso cheddar derretido, lechuga, salsa route, tomate, cebolla y pepinillos.",
    img: `${burgers2}`,
    id: 2,
  },
  {
    nombre: "Bacon Cheeseburger",
    texto:
      "Queso cheddar, tiras de tocino ahumado, lechuga, salsa route, tomate, cebolla y pepinillos.",
    img: `${burgers3}`,
    id: 3,
  },

  {
    nombre: "Bacon Guacamole Burger",
    texto:
      "Queso pepperjack, tocino, guacamole, lechuga, salsa route, tomate, cebolla y pepinillos.",
    img: `${burgers5}`,
    id: 5,
  },
  {
    nombre: "Chicken Sandwich",
    texto:
      "Sensacional sandwich de pollo panko. Salsa de queso cheddar, tiras de tocino ahumado, salsa tártara, lechuga y tomate.",
    img: `${burgers9}`,
    id: 9,
  },
];

export default burgers;
