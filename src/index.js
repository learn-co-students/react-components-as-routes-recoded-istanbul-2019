import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import Signup from './Signup'
import { BrowserRouter as Router, Route } from 'react-router-dom';




ReactDOM.render(( 
  <Router>
    <div>
    <Navbar />
    <Route exact path="/" component={Home} /> {/*<Route  path="/" component={Home} display Home in every route  */}
    <Route path="/" render={() => <h1>Home!</h1>} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    </div>
  </Router>),
  document.getElementById('root')
);
