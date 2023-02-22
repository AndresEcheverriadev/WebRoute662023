import { Router } from "express";
import bookingController from "../3controllers/bookingController.js";

const bookingsRouter = Router();

bookingsRouter.get("/all", bookingController.allBookings);
bookingsRouter.post("/filteredBookings", bookingController.filteredBookings);
bookingsRouter.post(
  "/filteredRangeBookings",
  bookingController.filteredRangeBookings
);
bookingsRouter.post("/addBooking", bookingController.addBooking);
bookingsRouter.delete("/deleteBooking", bookingController.deleteBooking);

export default bookingsRouter;
