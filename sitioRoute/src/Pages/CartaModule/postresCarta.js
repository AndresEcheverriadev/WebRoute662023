import postres1 from "./imgsCarta/OreoCheesecake.webp";
import postres2 from "./imgsCarta/DoubleChocolateVulcano.webp";
import postres3 from "./imgsCarta/Brownie.webp";
import postres4 from "./imgsCarta/RedVelvet.webp";
import postres5 from "./imgsCarta/CarrotCake.webp";
import postres6 from "./imgsCarta/ApplePie.webp";
import postres7 from "./imgsCarta/newYorkCheesecake.webp";
import postres8 from "./imgsCarta/tortaChocolateSinGlutenNiAzucar.webp";

const postres = [
  {
    nombre: "Oreo Cheesecake",
    texto: "Sensacional cheesecake de galleta Oreo.",
    img: `${postres1}`,
    id: 1,
    top: true,
  },
  {
    nombre: "Double Chocolate Vulcano",
    texto:
      "Espectacular pastel de chocolate con centro de salsa de chocolate caliente. Acompañado de cremoso helado de vainilla.",
    img: `${postres2}`,
    id: 2,
  },
  //platos borrados - se mantienen inactivos
  // {
  //   nombre: "Brownie",
  //   texto: "Un imperdible, servido a una cálida temperatura!",
  //   img: `${postres3}`,
  //   id: 3,
  // },
  // {
  //   nombre: "Red Velvet",
  //   texto:
  //     "Espectacular pastel de chocolate color rojo cubierto con un glaseado de queso cremoso.",
  //   img: `${postres4}`,
  //   id: 4,
  // },
  // {
  //   nombre: "Carrot Cake",
  //   texto:
  //     "Delicioso pastel de zanahoria cubierto con un glaseado de queso cremoso.",
  //   img: `${postres5}`,
  //   id: 5,
  // },
  {
    nombre: "Apple Pie",
    texto:
      "Deliciosa tarta hecha por diferentes capas de masa quebrada, cubierta por un relleno de manzana y canela, acompañado de helado de vainilla.",
    img: `${postres6}`,
    id: 6,
  },
  {
    nombre: "New York Cheesecake",
    texto: "Cremoso cheesecake acompañado de salsa de frutilla.",
    img: `${postres7}`,
    id: 7,
  },
  {
    nombre: "Torta Chocolate Sin Gluten Ni Azúcar",
    texto:
      "Finas capas de chocolate belga semi amargo, rellena con manjar de campo sin gluten y sin azúcar.",
    img: `${postres8}`,
    id: 8,
  },
];

export default postres;
