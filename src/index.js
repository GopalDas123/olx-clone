import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/AuthContext";
import AppRouter from "./router";

ReactDOM.render(
  <AuthProvider>
    <AppRouter>
      <App />
    </AppRouter>
  </AuthProvider>,
  document.getElementById("root")
);
