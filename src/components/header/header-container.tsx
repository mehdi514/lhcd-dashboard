import { connect } from 'react-redux';
import { Action, bindActionCreators, Dispatch } from 'redux';
import { RouteType } from '../../redux/navigation/models';
import { navigateTo } from '../../redux/navigation/actions';
import { HeaderView } from './header-view';
  
export const Header = connect(null, (dispatch: Dispatch<Action>) => bindActionCreators({
    navigateTo: (route: RouteType) => navigateTo(route),
}, dispatch))(HeaderView);
