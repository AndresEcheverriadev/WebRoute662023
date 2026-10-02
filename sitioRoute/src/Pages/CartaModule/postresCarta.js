import postres1 from "./imgsCarta/OreoCheesecake.webp";
import postres2 from "./imgsCarta/DoubleChocolateVulcano.webp";
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
