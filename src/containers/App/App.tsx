import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { Route, Switch } from 'react-router';

import { Header } from '../../components';
import { RouteType } from '../../redux/navigation/models';
import { LoginContainer } from '../Login';
import { DashboardContainer } from '../../components/dashboard/dashboard-container';
export const App = () => (
  <Switch>
    <React.Fragment>
      <Header />
      <Route path={RouteType.LOGIN} component={LoginContainer} />
      <Route path={RouteType.DASHBOARD} component={DashboardContainer} />
    </React.Fragment>
  </Switch>
);

export default hot(App);
