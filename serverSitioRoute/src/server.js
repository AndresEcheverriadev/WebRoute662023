import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import { onAuthorizationHeaders } from "./middlewares/onAuthorizationHeaders.js";
import { isAuthorized } from "./middlewares/isAuthorized.js";
import usersRouter from "./4routes/usersRouter.js";
import bookingsRouter from "./4routes/bookingsRouter.js";
import createBookingRouter from "./4routes/createBookingRouter.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(onAuthorizationHeaders);

app.use("/api/user", usersRouter);
app.use("/api/bookings", isAuthorized, bookingsRouter);
app.use("/api/createBooking", createBookingRouter);

const server = app.listen(process.env.PORT || 8085, () => {
  console.log(`Servidor escuchando en puerto ${server.address().port}`);
});

server.on("error", (error) => {
  console.error(`Error en el servidor ${error}`);
});
