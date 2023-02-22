import { Router } from "express";
import bookingController from "../3controllers/bookingController.js";

const createBookingRouter = Router();

createBookingRouter.post("/", bookingController.addBooking);

export default createBookingRouter;
