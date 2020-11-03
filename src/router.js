import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUpPage from "./SignupPage";
import Login from './Login'
import Home from "./Home";
import Post from './Components/Post';

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/login" component={Login} />
      <Route path="/post" component={Post} />
    </Router>
  );
};

export default AppRouter;
