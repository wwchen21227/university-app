import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Link, Route, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Home from '../components/home';
import Newsletter from '../components/newsletter';
import Search from '../components/search';

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
              <NavLink className="nav-link" exact role="button" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" exact role="button" to="/search">
                Search
              </NavLink>
              <NavLink className="nav-link" exact role="button" to="/subscribe">
                Newsletter
              </NavLink>
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
