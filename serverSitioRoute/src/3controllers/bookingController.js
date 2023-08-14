import { ServerResponse } from "../config/serverResponses.js";
import { bookingService } from "../2services/index.js";
import sendMail from "../2services/mailReservaService.js";

const allBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getAll();
    ServerResponse.success({
      res,
      result: "Reservas obtenidas",
      data: bookings,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno obteniendo reservas",
    });
  }
};

const filteredBookings = async (req, res) => {
  try {
    const { date } = req.body;
    if (!date) {
      return ServerResponse.badRequest({
        res,
        error: "Sin filtro de fechas",
      });
    }
    const filteredBookings = await bookingService.getFiltered(
      {
        diaReserva: date,
      },
      { horaReserva: 1 }
    );
    ServerResponse.success({
      res,
      result: "Reservas obtenidas",
      data: filteredBookings,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno obteniendo reservas",
    });
  }
};

const filteredRangeBookings = async (req, res) => {
  try {
    const { dateRangeStart, dateRangeEnd } = req.body;
    if (!dateRangeStart || !dateRangeEnd) {
      return ServerResponse.badRequest({
        res,
        error: "Sin filtro de fechas",
      });
    }
    const filteredBookings = await bookingService.getFiltered({
      dateRangeStart,
      dateRangeEnd,
    });
    ServerResponse.success({
      res,
      result: "Reservas obtenidas",
      data: filteredBookings,
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno obteniendo reservas",
    });
  }
};

const addBooking = async (req, res) => {
  let {
    nombreReserva,
    emailReserva,
    telefonoReserva,
    diaReserva,
    horaReserva,
    cantidadReserva,
    zonaReserva,
    comentarioReserva,
  } = req.body;
  if (
    !nombreReserva ||
    !emailReserva ||
    !diaReserva ||
    !horaReserva ||
    !cantidadReserva
  )
    return ServerResponse.badRequest({
      res,
      error: "Faltan datos para reserva",
    });
  const filteredBookings = await bookingService.getOne({
    emailReserva: emailReserva,
    diaReserva: diaReserva,
    horaReserva: horaReserva,
  });
  if (filteredBookings)
    return ServerResponse.badRequest({
      res,
      error: "Reserva ya existe",
    });
  try {
    const newBooking = {
      nombreReserva,
      emailReserva,
      telefonoReserva,
      diaReserva,
      horaReserva,
      cantidadReserva,
      zonaReserva,
      comentarioReserva,
    };
    let createdBooking = await bookingService.save(newBooking);
    sendMail(newBooking);
    ServerResponse.success({
      res,
      result: "Reserva creada",
    });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno creando reserva",
    });
  }
};

const deleteBooking = async (req, res) => {
  let { _id } = req.body;
  try {
    let booking = await bookingService.getOne({ _id });
    if (!booking) {
      return ServerResponse.notFound({ res, error: "Reserva no encontrada" });
    }
    let result = await bookingService.deleteOne(booking);
    ServerResponse.success({ res, result: "Reserva borrada" });
  } catch (error) {
    ServerResponse.internalError({
      res,
      error: "Error interno borrando reserva",
    });
  }
};

export default {
  allBookings,
  filteredBookings,
  filteredRangeBookings,
  addBooking,
  deleteBooking,
};
