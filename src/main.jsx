import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ReactGA from "react-ga4";
import "./css/base.css";

ReactGA.initialize("G-FWGQNV1KT9");

ReactGA.send({ hitType: "pageview",
   page: "/my-path",
   title: "Custom Title",
   });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
