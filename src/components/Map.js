import React from "react";
import GoogleMapReact from "google-map-react";

const SimpleComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = props => {
  const { center, zoom } = props;
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <SimpleComponent lat={center.lat} lng={center.lng} text="SimpleMap" />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
