import React from 'react';
import * as LogRocket from 'logrocket';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import { configureStore, history } from './redux/store';
import { InitialState } from './redux/store/initial-state';
import { App } from './containers/App';

LogRocket.init("zfy95z/statecert");

const store = configureStore(InitialState);

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
