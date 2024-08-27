import burgers1 from "./imgsCarta/FreshBurger.webp";
import burgers2 from "./imgsCarta/americanCheeseBurger.webp";
import burgers3 from "./imgsCarta/BaconCheeseburger.webp";
import burgers4 from "./imgsCarta/Route66Burger.webp";
import burgers5 from "./imgsCarta/BaconGuacamoleBurger.webp";
import burgers6 from "./imgsCarta/VeggieBurguer.webp";
import burgers7 from "./imgsCarta/BbqPorkSandwich.webp";
import burgers8 from "./imgsCarta/BeyondMeat.webp";
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
  //plato borrado - se mantiene inactivo
  // {
  //   nombre: "Fresh Burger",
  //   texto:
  //     "¡Sensacional! Queso de cabra, espárragos y pimentón asado glaseados con salsa teriyaki. Acompañado de rucula, tomate y cebolla.",
  //   img: `${burgers1}`,
  //   id: 1,
  // },
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
    nombre: "Veggie Burguer",
    texto:
      "Espectacular hamburguesa de quinoa con lenteja, acompañada de lechuga, tomate, palta y mayonesa.",
    img: `${burgers6}`,
    vegan: true,
    id: 6,
  },
  {
    nombre: "Bbq Pork Sandwich",
    texto:
      "Exquisito sándwich de cerdo desmenuzado con salsa BBQ, coleslaw, palta, pepinillos y mostaza.",
    img: `${burgers7}`,
    id: 7,
  },
  //plato borrado - se mantiene inactivo
  // {
  //   nombre: "Beyond Meat",
  //   texto:
  //     "Hamburguesa sucedánea de carne. 100%​ proteína de plantas, con nuestra salsa de la casa, lechuga, pimentones y champiñones asados y cebolla caramelizada.",
  //   img: `${burgers8}`,
  //   vegan: true,
  //   id: 8,
  // },
  {
    nombre: "Crispy Chicken Sandwich",
    texto:
      "Sensacional sandwich de pollo panko. Salsa de queso cheddar, tiras de tocino ahumado, salsa tártara, lechuga y tomate.",
    img: `${burgers9}`,
    id: 9,
  },
];

export default burgers;
