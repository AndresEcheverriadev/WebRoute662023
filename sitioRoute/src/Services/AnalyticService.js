import TagManager from "react-gtm-module";

const gtmId = process.env.REACT_APP_GTM_ID;

const initialize = () => {
  TagManager.initialize({ gtmId });
};

const pageTrackingListen = () => {
  TagManager.dataLayer({
    dataLayer: {
      event: "pageview",
      page: window.location.pathname + window.location.search,
    },
  });
};

const pageTrackingUnlisten = (history) => {
  history.listen((location) => {
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        page: location.pathname + location.search,
      },
    });
  });
};

const customEvent = (eventName, category, action, label, value) => {
  TagManager.dataLayer({
    dataLayer: {
      event: `${eventName}`,
      category: `${category}`,
      action: `${action}`,
      label: `${label}`,
      value: `${value}`,
    },
  });
};

const bookEvent = (
  eventName,
  category,
  action,
  fecha,
  hora,
  diaSemana,
  fechaReserva,
  nombreReserva,
  cantidadReserva,
  zonaReserva
) => {
  TagManager.dataLayer({
    dataLayer: {
      event: `${eventName}`,
      category: `${category}`,
      action: `${action}`,
      fecha: `${fecha}`,
      hora: `${hora}`,
      diaSemana: `${diaSemana}`,
      fechaReserva: `${fechaReserva}`,
      nombreReserva: `${nombreReserva}`,
      cantidadReserva: `${cantidadReserva}`,
      zonaReserva: `${zonaReserva}`,
    },
  });
};

export const analyticService = {
  initialize,
  pageTrackingListen,
  pageTrackingUnlisten,
  customEvent,
  bookEvent,
};
