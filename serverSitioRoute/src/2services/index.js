import Dao from "../1models/Dao.js";
import UserService from "./UserService.js";
import BookingService from "./BookingService.js";

const dao = new Dao();

export const userService = new UserService(dao);
export const bookingService = new BookingService(dao);
