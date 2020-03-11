import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = props => {
  const { center, zoom } = props.config;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={center.lat} lng={center.lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
