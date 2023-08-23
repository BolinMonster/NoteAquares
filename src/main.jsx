import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Crée un point de départ de rendu dans l'élément avec l'ID "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  // Active le mode strict pour le composant racine
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
