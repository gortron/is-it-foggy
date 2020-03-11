import React from "react";
import "./App.css";
import SimpleMap from "./components/Map";

const App = () => {
  return (
    <div className="App" style={{ height: "100vh", width: "100%" }}>
      <SimpleMap config={{ center: { lat: 37.35, lng: -122.21 }, zoom: 14 }} />
    </div>
  );
};

export default App;
