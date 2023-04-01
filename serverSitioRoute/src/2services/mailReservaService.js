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
    text: `Hola ${bookingData.nombreReserva}.

    Estos son los datos de tu reserva:
    Nombre:${bookingData.nombreReserva},
    Fecha:${bookingData.diaReserva},
    Hora:${bookingData.horaReserva},
    Cantidad de Personas:${bookingData.cantidadReserva},
    Zona:${bookingData.zonaReserva},
    Comentario:${bookingData.comentarioReserva}.

    Te esperamos.
    Route 66 
    Isidora Goyenechea 2960
    Las Condes
    232669954
    `,
    html: `${styledHTML}`,
  };

  const send = await transporter.sendMail(mesagge);
};

export default sendMail;
