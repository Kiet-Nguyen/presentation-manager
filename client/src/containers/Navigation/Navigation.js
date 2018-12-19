import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import Presentations from '../../components/Presentations/Presentations';
import AddPresentation from '../../components/AddPresentation/AddPresentation';
import LandingPage from '../../components/LandingPage/LandingPage';

class Navigation extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
              Presentation Manager
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink
                  className="nav-item nav-link active"
                  to="/presentation"
                >
                  Presentations<span className="sr-only">(current)</span>
                </NavLink>

                <NavLink className="nav-item nav-link" to="/presentation/add">
                  Add Presentation
                </NavLink>
              </div>
            </div>
          </nav>
        </header>

        <Route path="/" exact component={LandingPage} />
        <Switch>
          <Route path="/presentation/add" exact component={AddPresentation} />
          <Route path="/presentation" component={Presentations} />
        </Switch>
      </div>
    );
  }
}

export default Navigation;
