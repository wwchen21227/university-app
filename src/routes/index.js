import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from '../components/home';
import Newsletter from '../components/Newsletter';
import Search from '../components/Search';

export default () => {
  return (
    <Router>
      <div className="App">
        <Navbar expand="lg">
          <Navbar.Brand>
            <Link role="button" to="/">
              <span className="brand-name">University</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" role="button" to="/search">
                Search
              </Link>
              <Link className="nav-link" role="button" to="/subscribe">
                Newsletter
              </Link>
              <Link className="nav-link" role="button" to="/">
                Login/Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/subscribe">
            <Newsletter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
