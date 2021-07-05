import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import About from './About'
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" render={() => <h2>My my my, welcome to the squad!</h2>} />
      <Route exact path="/message" render={() => <h2>If you read this message, I'm already slept.</h2>} />
    </div>
  </Router>),
  document.getElementById('root')
);