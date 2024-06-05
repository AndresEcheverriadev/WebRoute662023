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

const customEvent = (eventName, variable) => {
  TagManager.dataLayer({
    dataLayer: {
      event: `${eventName}`,
      variable: `${variable}`,
      // category: `${category}`,
      // action: `${action}`,
      // label: `${label}`,
      // value: `${value}`,
    },
  });
};

export const analyticService = {
  initialize,
  pageTrackingListen,
  pageTrackingUnlisten,
  customEvent,
};
