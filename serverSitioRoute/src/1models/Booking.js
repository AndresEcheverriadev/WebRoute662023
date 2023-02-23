import mongoose from "mongoose";
const { Schema } = mongoose;

class Booking {
  static get collection() {
    return "route66bookings";
  }

  static get schema() {
    return {
      nombreReserva: { type: String, required: true, maxLength: 50 },
      emailReserva: { type: String, required: true, maxLength: 50 },
      telefonoReserva: { type: String, required: true, maxLength: 20 },
      diaReserva: { type: String, required: true, maxLength: 20 },
      horaReserva: { type: String, required: true, maxLength: 20 },
      cantidadReserva: { type: Number, required: true, min: 1, max: 99 },
      zonaReserva: { type: String, required: true, maxLength: 20 },
      comentarioReserva: { type: String, maxLength: 100 },
    };
  }
}

export default Booking;
