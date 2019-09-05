import * as React from 'react';
import './dashboard.css';
import { DashboardCard } from '../dashboardCard/dashboardCard';
import { NavLink, BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import { GetLicense } from '../getLicense/getLicense';
import { Account } from './../account/account';

export class DashboardView extends React.Component {
  render() {
    return (
      <body>
        {/* Body Start */}
        <div className="container">
          <div className="dash card">
            <h2 className="card-title">Dashboard</h2>
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className=" col-md-3" style={{ marginTop: '60px' }}>
                    <div className="navpills navbar-nav">
                      <NavLink
                        to="/dashboard/dashboardCard"
                        className="navlink title"
                        style={{ textDecoration: 'none' }}
                      >
                        <button
                          className="nav-item tab-root"
                          type="button"
                          role="tab"
                        >
                          <span>Dashboard</span>
                        </button>
                      </NavLink>
                      <NavLink
                        to="/dashboard/getLicense"
                        className="navlink title"
                        style={{ textDecoration: 'none' }}
                      >
                        <button
                          className="nav-item tab-root"
                          type="button"
                          role="tab"
                        >
                          <span>Get Licences</span>
                        </button>
                      </NavLink>

                      <NavLink
                        to="/dashboard/account"
                        className="navlink title"
                        style={{ textDecoration: 'none' }}
                      >
                        <button
                          className="nav-item tab-root"
                          type="button"
                          role="tab"
                        >
                          <span>Account</span>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                  <BrowserRouter>
                    <div className="col-md-9">
                      <Switch>
                        <Route
                          path="/dashboard"
                          exact
                          component={DashboardCard}
                        />
                        <Route
                          path="/dashboard/dashboardCard"
                          component={DashboardCard}
                        />
                        <Route
                          path="/dashboard/getLicense"
                          component={GetLicense}
                        />
                        <Route path="/dashboard/account" component={Account} />
                      </Switch>
                    </div>
                  </BrowserRouter>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
