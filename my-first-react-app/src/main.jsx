import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./Greetings.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Greeting></Greeting>
  </React.StrictMode>
);
