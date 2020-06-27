import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Login from "./login";
import Navbar from "./navbar";
import SignUp from "./signUp";
import Messages from "./messages"

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={SignUp}/>
      <Route exact path="/messages" component={Messages}/>
    </div>
  </Router>),
  document.getElementById('root')
);
