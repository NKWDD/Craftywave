import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import i18n from "./i18n"; // Import i18n instance
import App from "./App.jsx";
import "./index.css";

// Initialize i18n and then render the app
i18n.init().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
});