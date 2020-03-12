import React, { createRef, useEffect, useState } from "react";

const SimpleMap = props => {
  const [map, setMap] = useState(null);
  const { center, zoom } = props.config;
  const googleMapRef = createRef();

  useEffect(() => {
    const googleScript = createGoogleScript();
    createGoogleMap(googleScript);
  });

  const createGoogleScript = () => {
    const googleMapScript = document.createElement("script");

    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`;

    window.document.body.appendChild(googleMapScript);

    return googleMapScript;
  };

  const createGoogleMap = googleScript => {
    let googleMap = null;
    googleScript.addEventListener("load", googleMap => {
      googleMap = new window.google.maps.Map(googleMapRef.current, {
        zoom,
        center,
        disableDefaultUI: true
      });
      console.log(googleMap);
    });
    console.log(googleMap);
    setMap(googleMap);
  };

  return (
    <div
      id="google-map"
      ref={googleMapRef}
      style={{ height: "100vh", width: "100%" }}
    ></div>
  );
};

export default SimpleMap;
