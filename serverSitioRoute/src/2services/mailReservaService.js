import * as dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import mailGen from "../config/mailReservaTemplate.js";

const sendMail = async (bookingData) => {
  const styledHTML = mailGen(bookingData);

  let transporter = nodemailer.createTransport({
    host: "mail.route66.cl",
    port: 465,
    secure: true,
    auth: {
      user: "reservas@route66.cl",
      pass: process.env.RESERVAS_MAIL_PASS,
    },
    from: "reservas@route66.cl",
  });

  let mesagge = {
    from: "reservas@route66.cl",
    to: bookingData.emailReserva,
    subject: `Tu reserva en Route 66 esta lista`,
    html: `${styledHTML}`,
  };

  const send = await transporter.sendMail(mesagge);
};

export default sendMail;
