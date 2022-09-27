import React from "react";
import { Map } from "./Map";

type Props = {
  name: string;
  email: string;
  site: string;
  center: google.maps.LatLng;
};

export default function Contact(props: Props) {
  return (
    <div>
      <address>
        Contact {props.name} via{" "}
        <a data-testid="email" href={"mailto:" + props.email}>
          email
        </a>
        or on their
        <a data-testid="site" href={props.site}>
          website
        </a>
        .
      </address>
      <Map center={props.center} />
    </div>
  );
}
