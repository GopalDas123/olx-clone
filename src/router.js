import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUpPage from "./SignupPage";
import Login from './Login'
import Home from "./Home";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/login" component={Login} />
    </Router>
  );
};

export default AppRouter;
