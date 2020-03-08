import React from 'react';
import ReactDOM from 'react-dom';
import Signup from "./Signup"
import Login from "./Login"
import Messages from "./Messages"
import About from "./About"
import Home from "./Home"
import Navbar from "./Navbar"


import {BrowserRouter as Router, Route} from "react-router-dom"



ReactDOM.render(
  (
    <Router>
    <div>
      <Navbar />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/signup" component={Signup} />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
    </Router>
  ),
  document.getElementById('root')
);
