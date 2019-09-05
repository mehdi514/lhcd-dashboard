import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { combineReducers } from 'redux';

import { AppState } from './app-state';
import { AdminLicensesReducer } from '../adminLicenses/reducer';
import { AuthReducer } from '../authentication/reducer';
import { LicensesReducer } from '../licenses/reducer';

export const reducers = (history: any) => combineReducers<AppState>({
    adminLicenses: AdminLicensesReducer as any,
    auth: AuthReducer as any,
    licenses: LicensesReducer as any,    
    router: connectRouter(history as any)
});

export const history = createBrowserHistory();

export function configureStore(InitialState: AppState): Store<AppState> {
    const composeEnhancers =
        typeof window === 'object' &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
    const store = createStore(
        reducers(history as any) as any,
        InitialState,
        composeEnhancers(
            applyMiddleware(
                thunk,
                routerMiddleware(history as any),
            ),
        ),
    ) as Store<AppState>;
    return store;
}
