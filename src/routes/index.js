import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from '../components/home';
import Newsletter from '../components/newsletter';
import Search from '../components/search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default () => {
  return (
    <Router>
      <div className="App">
        <Navbar expand="lg" fixed="top">
          <Navbar.Brand>
            <Link role="button" to="/">
              <FontAwesomeIcon className="icon" icon={faGraduationCap} />
              <span className="brand-name">University</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" role="button" to="/">
                Home
              </Link>
              <Link className="nav-link" role="button" to="/search">
                Search
              </Link>
              <Link className="nav-link" role="button" to="/subscribe">
                Newsletter
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
