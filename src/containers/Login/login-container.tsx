import { Action, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RouteType } from '../../redux/navigation/models';
import { navigateTo } from '../../redux/navigation/actions';
import { LoginView } from './login-view';

export const LoginContainer = connect(null, (dispatch: Dispatch<Action>) => bindActionCreators({
    navigateTo: (route: RouteType) => navigateTo(route),
}, dispatch))(LoginView);
