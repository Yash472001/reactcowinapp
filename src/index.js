import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/react-fontawesome";
import { library } from "../node_modules/@fortawesome/fontawesome-svg-core";
// import { fab } from "../node_modules/@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "../node_modules/@fortawesome/free-solid-svg-icons";




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// render(<App />, document.getElementById("app"));
;
