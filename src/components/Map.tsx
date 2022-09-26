import React from "react";

import { LoadScript, GoogleMap } from "@react-google-maps/api";

interface MapProps {
  center: google.maps.LatLng;
  children?: React.ReactNode | React.ReactNode[];
}

const Map = function (props: MapProps) {
  return (
    <LoadScript id="script-loader" googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap id="example-map" center={props.center} />
    </LoadScript>
  );
};

export { MapProps, Map };
