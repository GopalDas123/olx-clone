import React from "react";
import Home from "./Home";
import AppRouter from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
      <div>
        <AppRouter />
        <Home />
      </div>
  );
};

export default App;
