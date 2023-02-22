import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const center = {
  lat: -33.41371,
  lng: -70.59989,
};

function GoogleMapModule({ mapWidth, mapHeight }) {
  const containerStyle = {
    width: mapWidth,
    height: mapHeight,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.setZoom(17);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      options={{ disableDefaultUI: true }}
      center={center}
      zoom={17}
      onLoad={onLoad}
    ></GoogleMap>
  ) : null;
}

export default GoogleMapModule;
