import React from "react";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Font,
} from "@react-pdf/renderer";
import RobotoRegular from "./Roboto-Regular.ttf";
import RobotoBold from "./Roboto-Bold.ttf";
import RobotoMedium from "./Roboto-Medium.ttf";
import logo from "./logo.png";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: RobotoRegular,
    },
    {
      src: RobotoBold,
      fontWeight: "bold",
    },
    {
      src: RobotoMedium,
      fontWeight: "normal",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  title: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 1,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  logo: { width: "50px", height: "auto" },
  body: {
    padding: 5,
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: 12,
    textAlign: "center",
    color: "black",
    width: "200px",
  },
  podContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
    padding: 1,
    marginTop: 1,
    marginBottom: 1,
    border: "2px solid black",
    borderRadius: "10px",
    width: "90vw",
  },
  podContainerUp: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    padding: 1,
  },
  podContainerBottom: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    padding: 1,
  },
  podTitle: {
    fontWeight: "bold",
    paddingLeft: 2,
    marginRight: 2,
    fontFamily: "Roboto",
    fontSize: 10,
    textAlign: "center",
  },
  podText: {
    paddingLeft: 2,
    marginRight: 2,
    fontFamily: "Roboto",
    fontSize: 10,
    textAlign: "center",
  },
});

const MyDocument = (date, qReservas, tpersonas, bookinsgArray) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.title}>
        <Image src={logo} style={styles.logo} />
        <Text> Reservas Route 66 {date}</Text>
      </View>
      <View style={styles.body}>
        <Text>Cantidad de Reservas {qReservas}</Text>
        <Text>Total de Personas {tpersonas}</Text>
      </View>
      <View>
        {bookinsgArray.map((booking, index) => (
          <View style={styles.podContainer} key={index}>
            <View style={styles.podContainerUp} key={index}>
              <Text style={styles.podTitle}>Hora:</Text>
              <Text style={styles.podText}>{booking.horaReserva}</Text>
              <Text style={styles.podTitle}>Nombre:</Text>
              <Text style={styles.podText}>{booking.nombreReserva}</Text>
              <Text style={styles.podTitle}>Telefono:</Text>
              <Text style={styles.podText}>{booking.telefonoReserva}</Text>
              <Text style={styles.podTitle}>Cantidad:</Text>
              <Text style={styles.podText}>{booking.cantidadReserva}</Text>
              <Text style={styles.podTitle}>Zona:</Text>
              <Text style={styles.podText}>{booking.zonaReserva}</Text>
            </View>
            <View style={styles.podContainerBottom} key={index}>
              <Text style={styles.podTitle}>Comentario:</Text>
              <Text style={styles.podText}>{booking.comentarioReserva}</Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const downloadPdf = (date, qReservas, tpersonas, bookingsArray) => {
  return (
    <div>
      <PDFDownloadLink
        document={MyDocument(date, qReservas, tpersonas, bookingsArray)}
        fileName={`reservas-${date}.pdf`}
      >
        {({ blob, url, loading, error }) =>
          loading ? (
            <div class="spinner-border text-light" role="status">
              <span class="visually-hidden">Cargando...</span>
            </div>
          ) : (
            <button className="btnDownloadPdf">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-file-earmark-arrow-down"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
              </svg>
              Descargar reservas
            </button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export { downloadPdf, MyDocument };
