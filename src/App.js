import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleMap from "./components/Map";

function App() {
  return (
    <div className="App">
      <SimpleMap center={{ lat: 37.38, lng: 122.23 }} zoom={{ zoom: 11 }} />
    </div>
  );
}

export default App;
