import React from "react";
import ReactDOM from "react-dom";

import Track from "./Components/Track";

import "./styles.css";

function App() {
  return (
    <div>
      <Track />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
