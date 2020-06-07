import React from "react";
import ReactDOM from "react-dom";
import Home from "./home";
import About from "./about";
import Login from "./login";
import SignUp from "./signup";
import Messages from "./messages";
import Navbar from "./navbar";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/Messages" component={Messages} />
    </div>
  </Router>,
  document.getElementById("root")
);
