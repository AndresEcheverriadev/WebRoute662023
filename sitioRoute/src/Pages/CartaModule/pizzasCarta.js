import pizzas1 from "./imgsCarta/BbqChicken.webp";
import pizzas2 from "./imgsCarta/Capresse.webp";
import pizzas3 from "./imgsCarta/Gamberetti.webp";
import pizzas4 from "./imgsCarta/Pepperoni.webp";
import pizzas5 from "./imgsCarta/SerranoArugula.webp";
import pizzas6 from "./imgsCarta/TheWorks.webp";

const pizzas = [
  {
    nombre: "Bbq Chicken",
    texto: "Mezcla de quesos, pollo, salsa bbq, cebolla morada y cilantro.",
    img: `${pizzas1}`,
    id: `pizzas1`,
  },
  {
    nombre: "Capresse",
    texto: "Mozzarella, queso de cabra, albahaca.",
    img: `${pizzas2}`,
    id: `pizzas2`,
  },
  {
    nombre: "Gamberetti",
    texto: "Mozzarella, camarones, perejil y rucula.",
    img: `${pizzas3}`,
    id: `pizzas3`,
  },
  {
    nombre: "Pepperoni",
    texto:
      "Pepperoni spicy, queso mozzarella y orégano… ¡El clásico preferido de américa!",
    img: `${pizzas4}`,
    id: `pizzas4`,
    top: true,
  },
  {
    nombre: "Serrano Arúgula",
    texto:
      "Cubierta con queso mozzarella, jamón crudo, rúcula, grana padano y tomate.",
    img: `${pizzas5}`,
    id: `pizzas5`,
  },
  {
    nombre: "The Works",
    texto:
      "Champiñones, salchicha spicy, pepperoni, mozzarella, cebolla morada, pimento verde, aceitunas y orégano.",
    img: `${pizzas6}`,
    id: `pizzas6`,
  },
];

export default pizzas;
