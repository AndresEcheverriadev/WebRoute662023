import { HTTPRequestService } from "./HTTPRequestService.js";

const getAllBookings = async () => {
  try {
    const { data } = await HTTPRequestService.get(
      process.env.REACT_APP_ALL_BOOKINGS_URL
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const getFilteredBookings = async (date) => {
  try {
    const { data } = await HTTPRequestService.post(
      process.env.REACT_APP_FILTERED_BOOKINGS_URL,
      { date }
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const addBooking = async (
  nombreReserva,
  emailReserva,
  telefonoReserva,
  diaReserva,
  horaReserva,
  cantidadReserva,
  zonaReserva,
  comentarioReserva
) => {
  try {
    const data = await HTTPRequestService.postBooking(
      process.env.REACT_APP_CREATE_BOOKING_URL,
      {
        nombreReserva,
        emailReserva,
        telefonoReserva,
        diaReserva,
        horaReserva,
        cantidadReserva,
        zonaReserva,
        comentarioReserva,
      }
    );
    alert(`BookingService: ${JSON.stringify(zonaReserva)}`);
    return { success: true, result: data };
  } catch (error) {
    console.log(`BookingServiceError: ${JSON.stringify(error)}`);
    return { success: false };
  }
};

const removeBooking = async (_id) => {
  try {
    const { data } = await HTTPRequestService.remove(
      process.env.REACT_APP_DELETE_BOOKING_URL,
      _id
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

const clearBookingRange = async (range) => {
  try {
    const { data } = await HTTPRequestService.remove(
      process.env.REACT_APP_DELETE_BOOKING_URL,
      range
    );
    return { success: true, data: data.data };
  } catch (error) {
    return { success: false };
  }
};

export const BookingService = {
  getAllBookings,
  getFilteredBookings,
  addBooking,
  removeBooking,
  clearBookingRange,
};
