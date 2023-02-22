// import * as fs from "fs";
// import { faker } from "@faker-js/faker";
// import bookingZones from "./bookingZones.mjs";
// import timeRanges from "./timeRanges.mjs";
// let bookings = [];

// for (let index = 0; index < 40; index++) {
//   const randomDias = Math.floor(Math.random() * (3 - 1) + 1);
//   const simpleDate = (date) => {
//     const newDate = `${date.getDate() + randomDias}/${
//       date.getMonth() + 1
//     }/${date.getFullYear()}`;
//     return newDate;
//   };
//   const randomCantidad = Math.floor(Math.random() * (15 - 1) + 1);
//   const randomLorem = Math.floor(Math.random() * (5 - 1) + 1);
//   const date = simpleDate(new Date());
//   const randomTime = Math.floor(Math.random() * timeRanges.length);
//   const randomZone = Math.floor(Math.random() * bookingZones.length);
//   let newbooking = {
//     nombreReserva: faker.name.fullName(),
//     emailReserva: faker.internet.email(),
//     telefonoReserva: faker.phone.number("+569########"),
//     diaReserva: date,
//     horaReserva: timeRanges[randomTime],
//     cantidadReserva: randomCantidad,
//     zonaReserva: bookingZones[randomZone],
//     comentarioReserva: faker.lorem.sentence(randomLorem),
//     id: index + 1,
//   };
//   bookings.push(newbooking);
// }

// console.log(bookings);

// fs.writeFile(
//   "./src/Data/bookings.json",
//   JSON.stringify(bookings),
//   function (err) {
//     if (err) console.log(err);
//     console.log("archivo guardado");
//   }
// );

function readBookings() {
  fs.readFile("./src/Data/bookings.json", "utf-8", (error, contenido) => {
    if (error) {
      console.log("error leyendo archivo");
    } else {
      console.log(JSON.parse(contenido));
    }
  });
}

readBookings();
