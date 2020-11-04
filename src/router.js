import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUpPage from "./SignupPage";
import Login from './Login'
import Home from "./Home";
import Post from './Components/Post';
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPasswrod';

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/post" component={Post} />
      <Route path="/forgot-password" component={ForgotPassword} />
    </Router>
  );
};

export default AppRouter;
