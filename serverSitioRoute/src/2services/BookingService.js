import Booking from "../1models/Booking.js";
import GenericRepository from "./GenericRepository.js";

class BookingService extends GenericRepository {
  constructor(dao) {
    super(dao, Booking.collection);
  }
}

export default BookingService;
